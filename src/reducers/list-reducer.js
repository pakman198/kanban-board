import { lists as defaultLists } from '../normalized-state';

const listsReducer = (lists = defaultLists, action) => {
  console.log('listReducer', lists, action);
  switch(action.type) {
    case 'CREATE_CARD': {
      const { cardId, listId } = action.payload;
      const entities = { ...lists.entities };

      entities[listId] = {
        ...entities[listId],
        cards: [ ...entities[listId].cards, cardId ]
      }
      
      return {
        ...lists,
        entities
      }
    }

    default:
      return lists;
  }
};

export default listsReducer;
