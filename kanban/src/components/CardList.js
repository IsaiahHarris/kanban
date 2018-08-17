import React from 'react';
import Card from './Card';
import '../../src/styles.css'
import PropTypes from 'prop-types';

const CardList = props=>{
  console.log('PrOpS', props);
  return (
    <div className="card-list-container"> 
      {
        props.cards.map((card,i)=>{
          return <Card key={i} 
          title={card.title} 
          body = {card.body}
          priority_id = {card.priority_id}
          status_id = {card.status_id}
          created_by = {card.created_by}
          assigned_to = {card.assigned_to}
          />
        })
      }
    </div>
  )
}

CardList.propTypes={
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
export default CardList;