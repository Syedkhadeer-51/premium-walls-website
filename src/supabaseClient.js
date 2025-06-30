import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sxjhsignqrolylngabxy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4amhzaWducXJvbHlsbmdhYnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0OTU5MzQsImV4cCI6MjA2NjA3MTkzNH0.n1pnzml4VQn72FSkl5dHjJpfY0RR4Cq-3b9pMq9zANM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
