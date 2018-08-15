import React from 'react';
import AddCardButton from '../AddCardButton';

const NewCardForm = props => {
  const {
    titleInput,
    bodyInput,
    priorityInput,
    statusInput,
    created_byInput,
    assigned_toInput,
    formHandler,
    changeHandler
  } = props
  return (
    <div className="NewCardForm-container">
      <label htmlFor="title">Title:</label>
      <input type="text"
        name="title"
        id="title"
        value={titleInput}
        onChange={changeHandler}
      />
      <label htmlFor="body">Body:</label>
      <input type="text"
        name="body"
        id="body"
        value={bodyInput}
        onChange={changeHandler}
      />
      <label htmlFor="priority">Priority_id:</label>
      <input type="text"
        name="priority_id"
        id="priority"
        value={priorityInput}
        onChange={changeHandler}
      />
      <label htmlFor="status">Status_id:</label>
      <input type="text"
        name="status_id"
        id="status"
        value={statusInput}
        onChange={changeHandler}
      />
      <label htmlFor="created_by">Created_by:</label>
      <input type="text"
        name="created_by"
        id="created_by"
        value={created_byInput}
        onChange={changeHandler}
      />
      <label htmlFor="assigned_to">Assigned_to:</label>
      <input type="text"
        name="assigned_to"
        id="assigned_to"
        value={assigned_toInput}
        onChange={changeHandler}
      />
      <AddCardButton label = 'Add Task' clickHandler = {formHandler}/>
    </div>
  )
}

export default NewCardForm;