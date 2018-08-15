import React from 'react';

const Card = ({title, body, priority, status, created_by, assigned_to})=>(
  <div className="card-container">
    <div className="title">{ title }</div>
    <div className="body">{ body }</div>
    <div className="priority">{ priority }</div>
    <div className="status">{ status }</div>
    <div className="created_by">{ created_by }</div>
    <div className="assigned_to">{ assigned_to }</div>
  </div>
)

export default Card;