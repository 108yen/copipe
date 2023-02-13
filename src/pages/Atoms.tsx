import supabase from "@/utils/supabase";
import { atom } from "jotai";

export const postData = atom(async (get) => {
    const response = await supabase.from('copipe').select('*');
    return response.data?.map((e)=><li>{e.title}</li>);
})

type Copipe = {
    id: number;
    inserted_at: Date;
    updated_at: Date;
    data: String;
    title: String;
}