import { PrismaClient } from '@/generated/prisma'

const urls = [
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/18.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/19.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/20.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/21.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/22.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/23.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/24.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/25.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/26.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/27.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/28.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/29.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/31.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-sketches/30.jpg'
]

const prisma = new PrismaClient()

async function fillHomeSlider() {
  const records = urls.map((url, i) => ({
    title: `Image ${i}`,
    url,
    alt: `Image ${i}`
  }))

  const created = await prisma.homepageSketches.createMany({
    data: records,
    skipDuplicates: true
  })
  console.log(created)
}

fillHomeSlider()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())
