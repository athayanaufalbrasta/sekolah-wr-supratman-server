import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

config();

if (!process.env.SUPABASE_LINK || !process.env.SUPABASE_ANON_KEY) {
	throw new Error("Missing Supabase credentials");
}

const supabaseUrl = process.env.SUPABASE_LINK;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
