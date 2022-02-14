export interface IPostData {
  date:string,
  title:string,
  tags:string[]
  fromNow:string
}

export interface IPost {
  data:IPostData,
  content:string,
  slug:string
}

export interface IPostArr {
  [index:number]:IPost[]
}

export interface LayoutProps {
  title?: string;
  description?: string;
}
