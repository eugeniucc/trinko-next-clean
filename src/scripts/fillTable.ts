import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
import { prisma } from '@/lib/prisma'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)
const bucket = 'portfolio'

const getAllFileNames = async () => {
  const { data, error } = await supabase.storage.from(bucket).list('', { limit: 100 })
  if (error) {
    return []
  }

  const fileNames = data.map((file) => file.name)
  console.log(fileNames)
  return fileNames
}

const main = async () => {
  const fileNames = await getAllFileNames()

  const fullUrls = fileNames.map((name) => ({
    title: name,
    url: `/public/${bucket}/${name}`,
    alt: name
  }))

  const result = await prisma.portfolio.createMany({
    data: fullUrls,
    skipDuplicates: true
  })

  console.log(result.count)
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect())
