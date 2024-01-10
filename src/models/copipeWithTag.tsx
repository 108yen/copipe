export type CopipeWithTag = {
    copipe_id: number;
    title: string;
    body: string;
    tags: { id: number, tag_body: string }[];
}