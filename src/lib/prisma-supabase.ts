import { PrismaClient as SupabaseClient } from '@/generated/prisma/supabase'

export const supabaseDb = new SupabaseClient()
