import React, { Component } from 'react';
import EditCardButton from '../EditCardButton';
import { editCard } from '../../actions';
import { connect } from 'react-redux';
import './EditCardForm.css';

class EditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: ''
    };
    console.log('edit card form props', props);
    this.editThisCard = this.editThisCard.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('event.target', event.target);
    switch (event.target.id) {
      case 'title':
        this.setState({ titleInput: event.target.value });
        break;
      case 'body':
        this.setState({ bodyInput: event.target.value });
        break;
      case 'priority_id':
        this.setState({ priorityInput: event.target.value });
        break;
      case 'status_id':
        this.setState({ statusInput: event.target.value });
        break;
      case 'created_by':
        this.setState({ created_byInput: event.target.value });
        break;
      case 'assigned_to':
        this.setState({ assigned_toInput: event.target.value });
        break;
      default:
        break;
    }
  }

  editThisCard(event) {
    const data = {};
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.created_by = parseInt(this.state.created_byInput);
    data.assigned_to = parseInt(this.state.assigned_toInput);
    data.priority_id = parseInt(this.state.priorityInput);
    data.id = this.props.id;
    data.status_id = parseInt(this.state.statusInput);
    console.log('data', data);
    this.props.editCard(data);
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      created_byInput: '',
      assigned_toInput: ''
    });

    event.target = document.getElementsByClassName('EditCardForm-container')[0];
    event.target.className = 'none';
  }

  render() {
    return (
      <div>
        <div className="EditCardForm-container">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.titleInput}
            onChange={this.handleInputChange}
          />
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            name="body"
            id="body"
            value={this.state.bodyInput}
            onChange={this.handleInputChange}
          />
          <label htmlFor="priority">Priority_id:</label>
          <select
            name="priority_id"
            id="priority_id"
            value={this.state.priorityInput}
            onChange={this.handleInputChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="1">High</option>
            <option value="2">Med</option>
            <option value="3">Low</option>
          </select>

          <select
            name="status_id"
            id="status_id"
            value={this.state.statusInput}
            onChange={this.handleInputChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="1">QUEUE</option>
            <option value="2">In Progress</option>
            <option value="3">Done</option>
          </select>
          <label htmlFor="created_by">Created_by:</label>
          <input
            type="text"
            name="created_by"
            id="created_by"
            value={this.state.created_byInput}
            onChange={this.handleInputChange}
          />
          <label htmlFor="assigned_to">Assign To: </label>
          <select
            name="assigned_to"
            id="assigned_to"
            value={this.state.assigned_toInput}
            onChange={this.handleInputChange}
          >
            <option value="">--Assign Task To User--</option>
            {this.props.users.map(card => {
              return (
                <option key={card.id} value={card.id}>{`${card.first_name} ${
                  card.last_name
                }`}</option>
              );
            })}
          </select>
          <EditCardButton label="Add Task" clickHandler={this.editThisCard} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.EditCardForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCard: card => {
      dispatch(editCard(card));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardForm);
