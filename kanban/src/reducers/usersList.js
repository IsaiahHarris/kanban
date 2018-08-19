import { GET_USERS } from '../actions';

const initialState = []

const usersList = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_USERS:
      return [...action.users]
    default:
      return state;
  }
}

export default usersList;