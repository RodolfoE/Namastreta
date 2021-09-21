const INITIAL_STATE = {
  sections: [
    {
      title: 'Blusas',
      imageUrl: 'https://i.ibb.co/BnnLcMj/blusa-2.jpg',
      id: 1,
      linkUrl: 'shop/blusas'
    },
    {
      title: 'Blusas',
      imageUrl: 'https://i.ibb.co/vhBp7DT/blusa-3.jpg',
      id: 22,
      linkUrl: 'shop/blusas'
    },
    {
      title: 'Blusas',
      imageUrl: 'https://i.ibb.co/5kZGFtJ/blusa-4.jpg',
      id: 2,
      linkUrl: 'shop/blusas'
    },
    {
      title: 'Blusas',
      imageUrl: 'https://i.ibb.co/YhpMMCB/blusa-5.jpg',
      id: 3,
      linkUrl: 'shop/blusas'
    },
    {
      title: 'Blusas',
      imageUrl: 'https://i.ibb.co/Ngh69MZ/blusa.jpg',
      id: 33,
      linkUrl: 'shop/blusas'
    },
    {
      title: 'Bones',
      imageUrl: 'https://i.ibb.co/swk0QDb/bone-2.jpg',
      id: 4,
      linkUrl: 'shop/bones'
    },
    {
      title: 'Bones',
      imageUrl: 'https://i.ibb.co/XXT74p7/bone.jpg',
      id: 5,
      linkUrl: 'shop/bones'
    },
    {
      title: 'Camisetas',
      imageUrl: 'https://i.ibb.co/Dr9SmkX/camiseta.png',
      id: 6,
      linkUrl: 'shop/camisetas'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

