import { PrismaClient as NeonClient } from '@/generated/prisma/neon'

export const neonDb = new NeonClient()
