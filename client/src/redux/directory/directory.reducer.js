const INITIAL_STATE = {
    sections: [
        {
          title: 'beer',
          imageUrl: 'https://i.ibb.co/dgWh4Md/i-Stock-520704188-e1525358992421.jpg',
          id: 1,
          linkUrl: 'shop/beer'
        },
        {
          title: 'sasuages',
          imageUrl: 'https://i.ibb.co/6nFvJ1b/sasuage.jpg',
          id: 2,
          linkUrl: 'shop/sasuages'
        },
        {
          title: 'cheese',
          imageUrl: 'https://i.ibb.co/d4pW2p2/cheese.jpg',
          id: 3,
          linkUrl: 'shop/cheese'
        },
        {
          title: 'liquor',
          imageUrl: 'https://i.ibb.co/wLQJ692/liquor.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/liquor'
        },
        {
          title: 'Equipment',
          imageUrl: 'https://i.ibb.co/j54pnZH/store.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/equipment'
        },
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer