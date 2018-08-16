import React from 'react';
import Card from '../Card';
import './Column.css'


const Column = props => {
  return (
    <div className="column-container">
      {
        props.cards.map((card, i) => {
          return <Card
            key={i}
            title={card.title}
            body={card.body}
            priority_id={card.priority_id}
            status_id = {card.status_id}
            created_by={card.created_by}
            assigned_to={card.assigned_to}
            className = 'card'
          />
        })
      }
    </div>
  )
}

export default Column;