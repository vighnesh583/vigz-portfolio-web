import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eqfskadiiedrkhschigo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZnNrYWRpaWVkcmtoc2NoaWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDEwMzQsImV4cCI6MjA2MTc3NzAzNH0.8XhprEv6ECwEgDdGJZCH8uNHeikmg9wBT1UjcbYXH4o';

export const supabase = createClient(supabaseUrl, supabaseKey)
