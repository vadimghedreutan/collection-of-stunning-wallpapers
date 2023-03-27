import { createClient } from "@supabase/supabase-js"

export const fetchImages = async () => {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || "",
        process.env.SUPABASE_SERVICE_ROLE_KEY || ""
    )

    const { data } = await supabaseAdmin.from("images").select("*").order("id")
    return data
}