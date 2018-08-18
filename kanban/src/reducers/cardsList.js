import { LOAD_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD, editCard } from '../actions'


const initialState = [
  { title: 'foo', body: 'bar', priority_id: 3, status_id: 3, created_by: 3, assigned_to: 2 }
];

const cardsList = (state = initialState, action) => {

  let id = action && action.editCard ? action.editCard.id:null

  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards];
    case ADD_CARD:
      return [...state, action.card];
    case EDIT_CARD:
    let newState =[]
    let zero = state[0]
    state.map(card => {
      if (card.id === Number(action.editCard.id)) {
        newState.push(action.editCard)
      }
    })
    return [zero, ...newState]
    case DELETE_CARD:
      return [...action.cards]
    default:
    console.log('default')
      return state;
  }
}

export default cardsList