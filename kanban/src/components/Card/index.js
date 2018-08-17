import React from 'react';
import '../../styles.css'
import PropTypes from 'prop-types';
import EditCardButton from '../EditCardButton';
const Card = ({title, body, statusName, priority, status_id, created_by, assigned_to, label})=>(
  

      <div className={`${statusName}-card`}>
      <div className="title">Title: { title }</div>    
      <div className="body">Body: { body }</div>
      <div className="priority_id">Priority: { priority }</div>
      <div className="created_by">Created By: { created_by }</div>
      <div className="assigned_to">Assigned To: { assigned_to }</div> 
      <EditCardButton
       statusName = {statusName}
       title = {title}
       body = {body}
       priority = {priority}
       created_by = {created_by}
       assigned_to = {assigned_to}
       />
      </div> 


)
Card.propTypes={
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Card;