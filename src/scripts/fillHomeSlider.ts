import { PrismaClient } from '@/generated/prisma'

const urls = [
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/1.webp',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/73.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/74.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/75.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/76.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/77.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/78.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/79.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/84.jpg',
  'https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-slider/85.jpg'
]

const prisma = new PrismaClient()

async function fillHomeSlider() {
  const records = urls.map((url, i) => ({
    title: `Image ${i}`,
    url,
    alt: `Image ${i}`
  }))

  const created = await prisma.homepageSlider.createMany({
    data: records,
    skipDuplicates: true
  })
  console.log(created)
}

fillHomeSlider()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())
