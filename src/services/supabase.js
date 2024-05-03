import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://evgsjmawhpcodumgienc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Z3NqbWF3aHBjb2R1bWdpZW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NzczNjMsImV4cCI6MjAzMDA1MzM2M30.A8vRSTL8OcTJWfWT4EI08BAWzKPJY26I21UctDWEb_c"
);
export default supabase;
