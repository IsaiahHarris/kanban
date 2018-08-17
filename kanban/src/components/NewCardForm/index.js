import React, { Component } from 'react';
import AddCardButton from '../AddCardButton';
import { addCard } from '../../actions'
import { connect } from 'react-redux'
import './NewCardForm.css'
import axios from 'axios';
class NewCardForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: '',
    }
    this.addNewCard = this.addNewCard.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('event.target', event.target);
    switch (event.target.id) {
      case 'title':
        this.setState({ titleInput: event.target.value })
        break;
      case 'body':
        this.setState({ bodyInput: event.target.value })
        break;
      case 'priority':
        this.setState({ priorityInput: event.target.value })
        break;
      case 'status_id':
        this.setState({ statusInput: event.target.value })
        break;
      case 'created_by':
        this.setState({ created_byInput: event.target.value });
        break;
      case 'assigned_to':
        this.setState({ assigned_toInput: event.target.value })
        break;
      default:
        break;
    }
  }

  addNewCard(event) {

    const data = {}
    data.title = this.state.titleInput
    data.body = this.state.bodyInput
    data.priority_id = parseInt(this.state.priorityInput)
    data.created_by = parseInt(this.state.created_byInput)
    data.assigned_to = parseInt(this.state.assigned_toInput)

    console.log('this.state.statusInput', this.state.statusInput);
    switch (this.state.priorityInput) {
      case 'High':
        data.priority_id = 1
        break;
      case 'Med':
        data.priority_id = 2
        break;
      case 'Low':
        data.priority_id = 3
        break;
      default:
        break;
    }
    switch (this.state.statusInput) {
      case "QUEUE":
        data.status_id = 1
        break;
      case 'In Progress':
        data.status_id = 2
        break;
      case 'Done':
        data.status_id = 3
        break;
      default:
    }
    console.log('data', data);
    this.props.addCard(data)
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: ''
    })
  }

  render() {
    console.log('STATUS INPUT', this.state.statusInput)
    return (
      <div className="NewCardForm-container">
        <label htmlFor="title">Title:</label>
        <input type="text"
          name="title"
          id="title"
          value={this.state.titleInput}
          onChange={this.handleInputChange}
        />
        <label htmlFor="body">Body:</label>
        <input type="text"
          name="body"
          id="body"
          value={this.state.bodyInput}
          onChange={this.handleInputChange}
        />
        <label htmlFor="priority">Priority_id:</label>
        <input type="text"
          name="priority_id"
          id="priority"
          value={this.state.priorityInput}
          onChange={this.handleInputChange}
        />
        <select name="status_id" id="status_id"
          value={this.state.statusInput}
          onChange={this.handleInputChange}
        >
          <option value="">--Please choose an option--</option>
          <option value="QUEUE" >QUEUE</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <label htmlFor="created_by">Created_by:</label>
        <input type="text"
          name="created_by"
          id="created_by"
          value={this.state.created_byInput}
          onChange={this.handleInputChange}
        />
        <label htmlFor="assigned_to">Assigned_to:</label>
        <input type="text"
          name="assigned_to"
          id="assigned_to"
          value={this.state.assigned_toInput}
          onChange={this.handleInputChange}
        />
        <AddCardButton label='Add Task' clickHandler={this.addNewCard} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewCardForm)