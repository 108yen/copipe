'use server'

import supabase from "@/utils/supabase";

export async function postComment(copipe_id: number, body: string) {
    const { data, error } = await supabase
        .from('comments')
        .insert([
            {
                body: body,
                copipe_id: copipe_id
            },
        ]);
    if (error) return { error: JSON.stringify(error) };
}