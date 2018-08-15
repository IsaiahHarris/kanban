import React from 'react';

import Card from './Card';

const CardList = props=>{
  return (
    <ul>
      {
        props.cards.map((card,i)=>{
          return <Card key={i} 
          title={card.title} 
          body = {card.body}
          priority = {card.priority}
          status = {card.status}
          created_by = {card.created_by}
          assigned_to = {card.assigned_to}
          />
        })
      }
    </ul>
  )
}

export default CardList;