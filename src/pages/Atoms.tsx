import supabase from "@/utils/supabase";
import { atom } from "jotai";

export type Copipe = {
    id: number;
    inserted_at: Date;
    updated_at: Date;
    body: string;
    title: string;
}

export const postAllCopipeAtom = atom(async (get) => {
    const { data, error } = await supabase
        .from('copipe')
        .select('*');
    const copipes: Array<Copipe> = data != null ? data.map(e => {
        const copipeItem: Copipe = {
            id: e.id,
            inserted_at: e.inserted_at,
            updated_at: e.updated_at,
            body: e.body,
            title: e.title,
        };
        return copipeItem;
    }) : [];

    return copipes;
})

export type FormProps = {
    title: string;
    body: string;
}

export const formPropsAtom = atom<FormProps>({
    title: '',
    body: '',
})

export const bodyFormValidateAtom = atom(true);

export const searchTextAtom = atom("");
