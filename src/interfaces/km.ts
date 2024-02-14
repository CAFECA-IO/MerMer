import type { Km, Category, Topic } from "@prisma/client";
export interface IKmMeta extends Omit<Km, 'mdFile'|'topicId'> {
  categories: Category[];
  topic: Topic;
}

export type IAllKmMeta = {
  drafts: {
    publishStatus: 'Drafts',
    kmMetas?:IKmMeta[]
  },
  published: {
    publishStatus: 'Published',
    kmMetas?:IKmMeta[]
  },
};

export interface IKm extends Km{
  categories?: Category[];
  topic: Topic;
}

export interface IKmTag extends Category {
  __isNew__?: boolean;
}