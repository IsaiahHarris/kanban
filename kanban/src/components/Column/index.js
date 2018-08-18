import React from 'react';
import Card from '../Card';
import './Column.css';
import CardList from '../CardList';

const Column = props => {

  let filterFunc = filterCards(props.label, props.cards)
  let sortedCards = sortPriority(props.cards)
  return (
    <div className="column-container">
      <div className={props.label}>{props.label}</div>
      <CardList cards={filterFunc} prioritySort = {sortedCards} />
    </div>
  )
}



function filterCards(label, cards) {

  switch (label) {
    case 'QUEUE':
      return cards.filter(card => card.status_id === 1);
    case 'In Progress':
      return cards.filter(card => card.status_id === 2);
    case 'Done':
      return cards.filter(card => card.status_id === 3);
    default:
      return cards;
  }
}

function sortPriority(cards) {
  return cards.sort(function (a, b) {
    a = a.priority_id;
    b = b.priority_id;
    return a - b;
  })
}
export default Column;