import React from 'react';
import Card from '../Card';
import './Column.css';
import CardList from '../CardList';

const Column = props => {
  // console.log('PROPS', props)
  let filterFunc = filterCards(props.label, props.cards)

  return (
    <div className="column-container">
      <div className="label">{props.label}</div>
      <CardList cards={filterFunc}/>
    </div>
  )
}



function filterCards(label, cards) {

  switch (label) {
    case 'QUEUE':
      return cards.filter(card => card.status_id === 1);
    case 'In Progress':
      return cards.filter(card=>card.status_id === 2);
    case 'Done':
    return cards.filter(card => card.status_id === 3);
    default:
    return cards;
  }
}


export default Column;