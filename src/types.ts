export interface ISingleBlogObject{
    [key: string]: string;
}

export interface IUseFetchReturn{
    data: ISingleBlogObject[],
    pending: boolean,
    error: string;
}