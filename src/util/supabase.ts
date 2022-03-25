import {createClient} from '@supabase/supabase-js'
import type {SupabaseQueryBuilder} from '@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder'
import type {definitions} from '../generated/supabase'

const client = createClient(
  'https://gwxljouvmhkyroyulwrn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3eGxqb3V2bWhreXJveXVsd3JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgyMTgyNzksImV4cCI6MTk2Mzc5NDI3OX0.ST3TlAtmIqIC3NeAUd-0ABplPzStSdMqZ-yEQ_jyXZw'
)

type From = <T extends keyof definitions>(
  table: T
) => SupabaseQueryBuilder<definitions[T]>
export const from: From = table => client.from(table)

export default {from, ...client}
