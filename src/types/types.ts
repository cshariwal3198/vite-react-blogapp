export interface ISingleBlogObject{
    [key: string]: string;
}

export interface IAllBlogFetch{
    data: ISingleBlogObject[],
    pending: boolean,
    error: string;
}

export interface ISingleBlogFetch{
    data: ISingleBlogObject,
    pending: boolean,
    error: string,
}

export interface IShowResult {
    filteredBlogs: ISingleBlogObject[],
    searchResult: any,
    isAvailable: boolean;
  }