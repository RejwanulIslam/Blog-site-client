export interface BlogPost {
    id: string | number;
    title: string;
    content: string;
    thumbnail?: string | null|undefined;
    tag?: string[];
    viws: number;
    _count?: {
        "comment": number
    }
    isFutured: boolean;
    status: string;
    authorId:string;
    created_at:Date;
    updated_at:Date;


}
