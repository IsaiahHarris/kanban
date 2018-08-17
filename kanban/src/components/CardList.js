import React from 'react';
import Card from './Card';
import '../../src/styles.css'
import PropTypes from 'prop-types';

const CardList = props => {

  return (
    <div className="card-list-container">
      {
        props.cards.map((card, i) => {
          const priorityName = card && card.priority ? card.priority.name : null
          console.log(priorityName)
          const created_by = card && card.created_by ? card.created_by.first_name : null
          const assigned_to = card && card.assigned_to ? card.assigned_to.first_name : null

          return <Card key={i}
            title={card.title}
            body={card.body}
            priority={priorityName}
            status_id={card.status_id}
            created_by={created_by}
            assigned_to={assigned_to}
          />
        })
      }
    </div>
  )
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
export default CardList;