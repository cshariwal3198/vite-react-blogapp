export interface ISingleBlogObject {
    [key: string]: string;
}

export interface IAllBlogFetch {
    data: ISingleBlogObject[],
    pending: boolean,
    error: string;
}

export interface ISingleBlogFetch {
    data: ISingleBlogObject,
    pending: boolean,
    error: string,
}

export interface IShowResult {
    filteredBlogs: ISingleBlogObject[],
    searchResult: any,
    isAvailable: boolean;
}

export interface IAdminForm {
    varifyCredentials: Function;
    account: string,
}

export interface IReturnPageLink {
    isBooleanValue: boolean,
    path: string,
    pageAddress: string,
}