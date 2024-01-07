'use server'

import supabase from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function postComment(copipe_id: number, body: string) {
    try {        
        await supabase
            .from('comments')
            .insert([
                {
                    body: body,
                    copipe_id: copipe_id
                },
            ]);
    } catch (error) {
        return { error: JSON.stringify(error) }
    } finally {
        revalidatePath('/archives/[id]', 'page')
    }
}