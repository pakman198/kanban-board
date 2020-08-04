import { cards as defaultCards } from '../normalized-state';

const cardsReducer = (cards = defaultCards, action) => {
  switch(action.type) {
    case 'CREATE_CARD': {
      const { cardId, card } = action.payload;
      return {
        entities: { ...cards.entities, [cardId]: card },
        ids: [ ...cards.ids, cardId ]
      }
    }

    default:
      return cards;
  }
};

export default cardsReducer;