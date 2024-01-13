'use server'

import supabase from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function postNewCopipe(props: { title: string, body: string }) {
    const { title, body } = props;

    if (await checkDupulicate(body)) {
        return { message: '投稿済みのコピペ' }
    }

    const { data, error } = await supabase
        .from('copipe')
        .insert([
            {
                title: title,
                body: body,
            },
        ]);
    if (error) return { error: JSON.stringify(error) };
    revalidatePath('/')
}

async function checkDupulicate(body: string) {
    const { data, error } = await supabase
        .from('copipe')
        .select()
        .eq('body', body)
        .maybeSingle();
    if (error) {
        //!文章が長いときにエラーになる
        console.log('check dupulicate error', error);
        return false;
    }
    return data != null;
}