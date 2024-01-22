'use server'

import supabase from "@/utils/supabase";
import { revalidatePath } from "next/cache";

async function insertTags(copipe_id: number, tag_ids: number[]) {
    const { data, error } = await supabase
        .from('_copipeToTag')
        .upsert(tag_ids.map(tag_id => {
            return { copipe_id: copipe_id, tag_id: tag_id }
        }))
    if (error) throw new Error(JSON.stringify(error));
}

async function deleteTags(copipe_id: number) {
    const { data, error } = await supabase
        .from('_copipeToTag')
        .delete()
        .eq('copipe_id', copipe_id)
    if (error) throw new Error(JSON.stringify(error));
}

export async function updateTags(copipe_id: number, tag_ids: number[]) {
    try {
        await deleteTags(copipe_id)
        await insertTags(copipe_id, tag_ids)
    } catch (error) {
        return { error: JSON.stringify(error) }
    }
    revalidatePath('/admin/[page]', 'page')
}