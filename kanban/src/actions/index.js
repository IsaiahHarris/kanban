import axios from 'axios';
export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const GET_USERS = 'GET_USERS';



export const addCard = (data) => {

  return dispatch => {
    axios.post('/api/cards', data)
      .then(response => {
        console.log('response.data', response.data);
        dispatch({
          type: ADD_CARD,
          card: response.data
        })
      })
  }
}

export const deleteCard = card => {
  return dispatch => {
    return axios.delete(`/api/cards/${card}`)
      .then(response => {

        dispatch({
          type: DELETE_CARD,
          cards: response.data
        })
      })
  }
}

export const getUsers = () => {
  return dispatch => {
    return axios.get('/api/users')
      .then(response => {
        console.log('response', response);
        dispatch({
          type: GET_USERS,
          users: response.data
        })
      })
  }
}

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

export const editCard = (card) => {
  // console.log('card', card.id)
  return dispatch => {
    return axios.put(`/api/cards/${card.id}`, card)
      .then(response => {
        // console.log('response', response);
        dispatch({
          type: EDIT_CARD,
          editCard: response.data
        })
      })
  }
}