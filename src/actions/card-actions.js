export const CREATE_CARD = 'CREATE_CARD';

const defaultData = {
  title: '',
  description: '',
  assignedTo: ''
}

export const createCard = (listId, cardData) => {
  const cardId = Date.now().toString();
  const card = {
    id: cardId,
    ...defaultData,
    ...cardData
  };

  return { 
    type: CREATE_CARD, 
    payload: { card, listId, cardId }
  };
}