import axios from 'axios';
export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';

export const loadCards = () => {
  return dispatch => {
    return axios.get('/api/cards')
      .then(response => {
        dispatch({
          type: LOAD_CARDS,
          cards: response.data
        })
      })
  }
}


export const addCard = (data) =>{
  console.log('THIS IS DATA',data);
  return dispatch =>{
    axios.post('/api/cards', data)
    .then(response=>{
      dispatch({
        type: ADD_CARD,
        card: response.data
      })
    })
  }
}