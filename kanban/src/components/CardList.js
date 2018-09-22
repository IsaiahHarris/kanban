import React from 'react';
import Card from './Card';
import '../../src/styles.css';

const CardList = props => {
  return (
    <div className="card-list-container">
      {props.cards.map((card, i) => {
        const statusName = card && card.status ? card.status.name : null;
        const priorityName = card && card.priority ? card.priority.name : null;
        const created_by =
          card && card.created ? card.created.first_name : null;
        const assigned_to =
          card && card.assigned ? card.assigned.first_name : null;
        return (
          <Card
            key={i}
            title={card.title}
            body={card.body}
            priority={priorityName}
            statusName={statusName}
            status_id={card.status_id}
            created_by={created_by}
            assigned_to={assigned_to}
            id={card.id}
            users={props.users}
          />
        );
      })}
    </div>
  );
};

// CardList.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       body: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// }
export default CardList;
