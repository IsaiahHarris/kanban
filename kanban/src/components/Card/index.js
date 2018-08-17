import React from 'react';
import '../../styles.css'
import PropTypes from 'prop-types';

const Card = ({title, body, priority, status_id, created_by, assigned_to, label})=>(
  
      <div className="card-entry"> 
      <div className="title">Title: { title }</div>    
      <div className="body">Body: { body }</div>
      <div className="priority_id">Priority: { priority }</div>
      <div className="created_by">Created By { created_by }</div>
      <div className="assigned_to">Assigned To{ assigned_to }</div> 
      </div> 

)
Card.propTypes={
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Card;