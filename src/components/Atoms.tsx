import { CopipeWithTag } from "@/models/copipeWithTag";
import supabase from "@/utils/supabase";
import { atom } from "jotai";

export const copipeListAtom = atom<Promise<Array<CopipeWithTag>>>(
    async (get) => {
        const postCopipe = async (word: string, page: number) => {
            const { data, error } = await supabase
                .from('copipe_with_tag')
                .select()
                .like('body', '%' + word + '%')
                .order('copipe_id', { ascending: false })
                .range(10 * (page - 1), 9 + 10 * (page - 1));
            if (error) console.log('post copipe error', error);

            const copipes: Array<CopipeWithTag> = data != null ? data.map(e => {
                const copipeItem: CopipeWithTag = {
                    copipe_id: e.copipe_id,
                    body: e.body,
                    title: e.title,
                    tag_bodies: e.tag_bodies
                };
                return copipeItem;
            }) : [];

            return copipes;
        }

        return await postCopipe(get(searchTextAtom), get(pageAtom));
    }
);

const searchTextAtom = atom("");
export const writeSearchTextAtom = atom(
    null,
    (get, set, update: string) => {
        set(pageAtom, 1);
        set(searchTextAtom, update);
    }
)

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