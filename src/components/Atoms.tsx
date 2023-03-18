import supabase from "@/utils/supabase";
import { atom } from "jotai";

export type Copipe = {
    id: number;
    inserted_at: Date;
    updated_at: Date;
    body: string;
    title: string;
}

export const copipeListAtom = atom<Promise<Array<Copipe>>>(
    async (get) => {
        const postCopipe = async (word: string, page: number) => {
            const { data, error } = await supabase
                .from('copipe')
                .select()
                .like('body', '%' + word + '%')
                .order('id', { ascending: false })
                .range(10 * (page - 1), 9 + 10 * (page - 1));
            if (error) console.log('post copipe error', error);

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
        }

        return await postCopipe(get(searchTextAtom), get(pageAtom));
    }
);

export type FormProps = {
    title: string;
    body: string;
}

export const formPropsAtom = atom<FormProps>({
    title: '',
    body: '',
})

export const bodyFormValidateAtom = atom(0);

export const searchTextAtom = atom("");

export const dialogStateAtom = atom(0);

export const pageNumAtom = atom(
    async (get) => {
        const countCopipeRows = async (word: string) => {
            const { data, error, status, count } = await supabase
                .from('copipe')
                .select('*', { count: 'exact', head: true })
                .like('body', '%' + word + '%');
            if (error) console.log('copipe row count error', error);

            return count ?? 0;
        }
        const count = await countCopipeRows(get(searchTextAtom));

        return Math.ceil(count / 10);
    }
);

export const pageAtom = atom(1);

export const textFormAtom = atom("");