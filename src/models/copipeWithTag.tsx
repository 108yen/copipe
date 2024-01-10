export type CopipeWithTag = {
    copipe_id: number;
    title: string;
    body: string;
    tags: { tag_id: number, tag_body: string }[];
}