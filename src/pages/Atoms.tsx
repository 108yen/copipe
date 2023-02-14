import supabase from "@/utils/supabase";
import { atom, useAtom } from "jotai";

type Copipe = {
    id: number;
    inserted_at: Date;
    updated_at: Date;
    data: String;
    title: String;
}

export const postAllCopipeAtom = atom(async (get) => {
    const response = await supabase.from('copipe').select('*');
    const copipes: Array<Copipe> = response.data != null ? response.data.map(e => {
        const copipe: Copipe = {
            id: e.id,
            inserted_at: e.inserted_at,
            updated_at: e.updated_at,
            data: e.data,
            title: e.title,
        };
        return copipe;
    }) : [];

    return copipes.map((e) => <li>{e.title}</li>);
})


// export const copipe = atom(
//     (get)=>get(postDataAtom).
// )