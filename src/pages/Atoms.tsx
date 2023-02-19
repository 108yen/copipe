import { atom } from "jotai";

export type Copipe = {
    id: number;
    inserted_at: Date;
    updated_at: Date;
    body: string;
    title: string;
}

export const copipeListAtom = atom<Array<Copipe>>([]);

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
