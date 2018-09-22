import { combineReducers } from 'redux';

import cardsList from './cardsList';
import usersList from './usersList';

export default combineReducers({
  cardsList,
  usersList
});
