// content.ts

export interface IContentImage {
  uri: string;
}

export interface IContentCardData extends IContentImage {
  image: IContentImage;
  publishedAt: Date;
  podcastLength: number;
  timeSpentOnByUser: number;
}

export interface IContentExpert {
  firstName: string;
  lastName: string;
  company: string;
  title: string;
}

export interface IContentCard extends IContentExpert, IContentImage {
  name: string;
  id: number;
  publishedAt: Date;
  timeSpentOnByUser: number;
  podcastLength: number;
  image: IContentCardData;
  categories: {
    name: string;
  }[];
  experts: [IContentExpert];
}
