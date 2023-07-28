export interface IAuthor {
  id: string;
  name: string;
  jobTitle: string;
  intro: string;
  avatar: string;
}

export const notFoundAuthor: IAuthor = {
  id: 'none',
  name: 'NaN',
  jobTitle: 'NaN',
  intro: 'NaN',
  avatar: '/icons/user.svg',
};

// ToDo: (20230720 - Julian) 另外拔出來
export const mermerAuthors: IAuthor[] = [
  {
    id: 'julian',
    name: 'Julian Hsu',
    jobTitle: 'Frontend Engineer',
    intro:
      'Give me a cup of Milk Cap Tea and I can lift the whole world. Must be full sugar and Cream Cheese flavor. Preferably topped with a Strawberry Mochi.',
    avatar: '/profiles/profile_julian.png',
  },
];
