// eslint-disable-next-line import/prefer-default-export
export const RECIPES = [
  {
    id: '0',
    name: 'Racuchy',
    description: 'Pyszne i proste śniadnie na słodko.',
    difficulty: 2,
    ingredients: [
      {
        name: 'banan',
        quantity: 2,
        unit: 'sztuka',
      },
      {
        name: 'jajko',
        quantity: 1,
        unit: 'sztuka',
      },
      {
        name: 'mleko',
        quantity: 100,
        unit: 'ml',
      },
      {
        name: 'mąka',
        quantity: 100,
        unit: 'g',
      },
      {
        name: 'proszek do pieczenia',
        quantity: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'soda oczyszczona',
        quantity: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'sól',
        quantity: 0.5,
        unit: 'łyżeczka',
      },
    ],
    numberOfMeals: 2,
    duration: {
      hour: '0',
      minutes: '30',
    },
    imageUrl:
      'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-256/fluffy-pancakes-52.jpg',
  },
  {
    id: '1',
    name: 'Placki bananowo owsiane',
    description: 'Pyszne i proste śniadnie na słodko. Płatki owsiane należy zblendować',
    difficulty: 2,
    ingredients: [
      {
        name: 'banan',
        quantity: 2,
        unit: 'sztuka',
      },
      {
        name: 'jajko',
        quantity: 1,
        unit: 'sztuka',
      },
      {
        name: 'mleko',
        quantity: 100,
        unit: 'ml',
      },
      {
        name: 'płatki owsiane',
        quantity: 100,
        unit: 'g',
      },
      {
        name: 'proszek do pieczenia',
        quantity: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'soda oczyszczona',
        quantity: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'sól',
        quantity: 0.5,
        unit: 'łyżeczka',
      },
    ],
    numberOfMeals: 2,
    duration: {
      hour: '0',
      minutes: '30',
    },
    imageUrl:
      'https://lh3.googleusercontent.com/no-CSdLbXnOpK66r9PDFTYk3k0f3c_4M_QggJWVihhGtvCr1yJuHfx40Ana5DpTaxtRFSe-m7-lgd69na9PS5A=s256-c-rj-v1-e365',
  },
  {
    id: '2',
    name: 'Jaglanka',
    description: `Pyszne danie na każdą porę. Kaszę jaglaną można zastąpić ryżem,
      natomiast wodę można zastąpić mlekiem.
      Jabłko można zetrzeć na dużych oczkach,
      albo pokroić w kostkę, następnie dodać do gorącej ugotowanej kaszy jaglanej,
      a następnie wymieszać z cynamonem.`,
    difficulty: 2,
    ingredients: [
      {
        name: 'jabłko',
        quantity: 2,
        unit: 'sztuka',
      },
      {
        name: 'serek wiejski',
        quantity: 2,
        unit: 'sztuka',
      },
      {
        name: 'kasza jaglana',
        quantity: 80,
        unit: 'g',
      },
      {
        name: 'cynamon',
        quantity: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'woda',
        quantity: 160,
        unit: 'ml',
      },
    ],
    numberOfMeals: 2,
    duration: {
      hour: '0',
      minutes: '10',
    },
    imageUrl:
      'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/apple-cinnamon-oat-porridge-2492438.jpg',
  },
  {
    id: '3',
    name: 'Budyń Rafaello',
    description: `Pyszna danie na śniadanie i nie tylko. Można użyć zamiast miodu, banana.
      Wszystkie skadniki po ugotowaniu kaszy jaglanej w mleku zblendować i dodać miód lub banana.`,
    difficulty: 2,
    ingredients: [
      {
        name: 'kasza jaglana',
        quantity: 80,
        unit: 'g',
      },
      {
        name: 'mleko',
        quantity: 2,
        unit: 'szklanka',
      },
      {
        name: 'miód',
        quantity: 2,
        unit: 'łyżeczka',
      },
      {
        name: 'wiórki kokosowe',
        quantity: 2,
        unit: 'łyżka',
      },
      {
        name: 'migdały',
        quantity: 30,
        unit: 'g',
      },
    ],
    numberOfMeals: 2,
    duration: {
      hour: '0',
      minutes: '10',
    },
    imageUrl:
      'data:image/jpeg;base64,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',
  },
  {
    id: '4',
    name: 'Budyń Rafaello',
    description: `Pyszna danie na śniadanie i nie tylko. Można użyć zamiast miodu, banana.
      Wszystkie skadniki po ugotowaniu kaszy jaglanej w mleku zblendować i dodać miód lub banana.`,
    difficulty: 2,
    ingredients: [
      {
        name: 'kasza jaglana',
        quantity: 80,
        unit: 'g',
      },
      {
        name: 'mleko',
        quantity: 2,
        unit: 'szklanka',
      },
      {
        name: 'miód',
        quantity: 2,
        unit: 'łyżeczka',
      },
      {
        name: 'wiórki kokosowe',
        quantity: 2,
        unit: 'łyżka',
      },
      {
        name: 'migdały',
        quantity: 30,
        unit: 'g',
      },
    ],
    numberOfMeals: 2,
    duration: {
      hour: '0',
      minutes: '10',
    },
    imageUrl:
      'data:image/jpeg;base64,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',
  },
];
