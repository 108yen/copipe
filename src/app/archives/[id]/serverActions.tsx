'use server'

import supabase from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function postComment(copipe_id: number, body: string) {
    const { data, error } = await supabase
        .from('comments')
        .insert([
            {
                body: body,
                copipe_id: copipe_id
            },
        ]);
    if (error) {
        revalidatePath('/archives/[id]', 'page')
        return { error: JSON.stringify(error) }
    };
}