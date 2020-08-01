import CreateCard from '../components/CreateCard';
import { connect } from 'react-redux';

const defaultData = {
  title: '',
  description: '',
  assignedTo: ''
}

const mapDispatchToProps = dispatch => {
  return {
    createCard: (listId, cardData) => {
      const cardId = Date.now().toString();
      const card = {
        id: cardId,
        ...defaultData,
        ...cardData
      };
  
      return dispatch({ type: 'CREATE_CARD', payload: { card, listId, cardId }});
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateCard)