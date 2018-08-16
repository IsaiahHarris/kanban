import React from 'react';
import AddCardButton from '../AddCardButton';
import { addCard } from '../../actions'
import {connect} from 'react-redux'
import axios from 'axios';
class NewCardForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: '',
    }
    this.addNewCard = this.addNewCard = this.addNewCard.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    switch(event.target.id){
      case 'title':
      this.setState({titleInput: event.target.value})
      break;
      case 'body':
      this.setState({bodyInput: event.target.value})
      break;
      case 'priority':
      this.setState({priorityInput: event.target.value})
      break;
      case 'status':
      this.setState({statusInput: event.target.value})
      break;
      case 'created_by':
      this.setState({created_byInput: event.target.value});
      break;
      case 'assigned_to':
      this.setState({assigned_toInput: event.target.value})
      break;
      default:
      break;
    }
  }
  addNewCard(event){
    console.log('clicked', this.state.priorityInput)
    const data = {}
    data.title = this.state.titleInput
    data.body = this.state.bodyInput
    data.priority_id = this.state.priorityInput
    data.status_id = this.state.statusInput
    data.created_by = this.state.created_byInput
    data.assigned_to = this.state.assigned_toInput

    axios.post('/api/cards', data)
    .then(response=>{
      const card = response.data;
      this.setState(prevState=>{
        return {cards: prevState.cards.concat(card),
          titleInput: '',
          bodyInput: '',
          priorityInput: '',
          statusInput: '',
          created_byInput: '',
          assigned_toInput: '',
        }
      });
    })
    .catch(err=>{
      console.log(err)
    })
  }

render(){
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
      <label htmlFor="status">Status_id:</label>
      <input type="text"
        name="status_id"
        id="status"
        value={this.state.statusInput}
        onChange={this.handleInputChange}
      />
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
      <AddCardButton label = 'Add Task' clickHandler = {this.addNewCard}/>
    </div>
  )
}

}

export default NewCardForm;