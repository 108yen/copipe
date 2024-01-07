'use server'

import supabase from "@/utils/supabase";

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
}

async function checkDupulicate(body: string) {
    const { data, error } = await supabase
        .from('copipe')
        .select()
        .eq('body', body)
        .limit(1)
        .maybeSingle();
    // .match({ body: inputData });
    if (error) {
        //!文章が長いときにエラーになる
        console.log('check dupulicate error', error);
        return false;
    }
    return data?.length != 0;
}