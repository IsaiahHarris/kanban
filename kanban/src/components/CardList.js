import React from 'react';
import Card from './Card';
import '../../src/styles.css'

const CardList = props=>{
  return (
    <div className="card-list-container"> 
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
    </div>
  )
}

export default CardList;