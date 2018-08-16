import React from 'react';
import Card from '../Card';
import './Column.css';
import CardList from '../CardList';

const Column = props => {
  console.log('PROPS', props)
  return (
    <div className="column-container">
      <div className="label">{props.label}</div>
      <CardList cards={filterCards(props)}/>
    </div>
  )
}



function filterCards(props) {
  switch (props.label) {
    case 'QUEUE':
      return props.cards.filter(card => card.status_id === 1);
    case 'In Progress':
      return props.cards.filter(card=>card.status_id === 2);
    case 'Done':
    return props.cards.filter(card => card.status_id === 3);
    default:
    return props.cards;
  }
}


export default Column;