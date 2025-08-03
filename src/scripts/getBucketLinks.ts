import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const bucket = 'homepage-slider'
const supabase = createClient(supabaseUrl!, supabaseKey!)

async function getBucketLinks() {
  const { data, error } = await supabase.storage.from(bucket).list('', {
    offset: 0,
    limit: 100
  })

  if (error) {
    console.error(error.message)
    return
  }

  const urls = data.map((file) => `${supabaseUrl}/storage/v1/object/public/${bucket}/${file.name}`)

  fs.writeFileSync('result.json', JSON.stringify(urls), 'utf-8')
}

getBucketLinks()
