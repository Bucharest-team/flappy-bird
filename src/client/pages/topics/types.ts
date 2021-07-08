export interface IParams {
    id?: string;
}

export interface IComment {
    id: number;
    text: string;
    rating: number;
    author: string;
}

export interface ICommentList {
    comments: IComment[];
}

export interface ITopicItem {
    id: number;
    title: string;
    author: string;
    description: string;
    rating?: number;
    date: string;
    comments: IComment[];
}

export interface ICreateTopic {
    title: string;
    author: string;
    description: string;
}
