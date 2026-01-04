import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
import { ImageType } from '@/generated/prisma/client'
import prisma from '@/lib/prisma'

const supabase = createClient(process.env.SUPABASE_S3_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

async function main() {
  const bucket = 'Portfolio'

  const { data, error } = await supabase.storage.from(bucket).list('', { limit: 1000, sortBy: { column: 'name', order: 'asc' } })

  if (error) throw error

  for (const file of data) {
    if (!file.name || file.name.endsWith('/')) continue
    if (!/\.(webp|jpg|jpeg|png)$/i.test(file.name)) continue

    const path = `${bucket}/${file.name}`

    await prisma.image.upsert({
      where: { url: path },
      update: {},
      create: {
        title: file.name.replace(/\.[^.]+$/, ''),
        alt: file.name,
        url: path,
        type: ImageType.PORTFOLIO
      }
    })
  }

  console.log('done')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
