export interface CommentResp {
  body: string;
  email: string;
  author: string;
}

export interface BlogPostResp {
  _id: string;
  body: string;
  permalink: string;
  author: string;
  date: string;
  title: string;
  tags: string[];
  comments: CommentResp[];
}

export interface BlogListResp {
  documents: BlogListResp[];
}

export interface ApiRequestInfoType {
  method: string;
  pageIndex?: number;
  pageSize?: number;
  id?: string;
}
