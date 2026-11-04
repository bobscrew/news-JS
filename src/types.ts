export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface SourcesResponse {
  status: string;
  sources: Source[];
}

export interface EverythingResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Callback<T> {
  (data: T): void;
}

export interface LoaderOptions {
  [key: string]: string;
}

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST'
}