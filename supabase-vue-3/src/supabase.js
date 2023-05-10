import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjyttlzxoulnklcsicjs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqeXR0bHp4b3VsbmtsY3NpY2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2NTI4ODksImV4cCI6MTk5OTIyODg4OX0.FgDPsmtpD3qBOP8-lXKL7KVdqVGnJkRqs7VfWG0xjmY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
