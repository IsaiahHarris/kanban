import { LOAD_CARDS } from '../actions'

const initialState =[
  {title: 'foo', body:'bar', priority_id: 3, status_id: 3, created_by: 3, assigned_to: 2}
];

const cardsList = (state = initialState, action)=>{
  switch(action.type){
    case LOAD_CARDS:
    return [...action.cards];
    default:
    return state;
  }
}

export default cardsList