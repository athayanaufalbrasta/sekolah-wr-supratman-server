import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

config();

const supabaseUrl = process.env.SUPABASE_LINK;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
