// export class CopipeComment{
//     id?: number;
//     created_at?: Date;
//     copipe_id?: number;
//     body?: string;

//     constructor(partial?: Partial<CopipeComment>) {
//         Object.assign(this, partial)
//     }
// }

export type CopipeComment = {
  id: number
  created_at?: Date
  copipe_id?: number
  body: string
}
