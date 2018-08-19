import React from 'react';
import '../../styles.css'

import EditCardButton from '../EditCardButton';
import EditCardForm from '../EditCardForm';
import { connect } from 'react-redux'
import { deleteCard } from '../../actions'

class Card extends React.Component {
  constructor(props) {
    super(props)
    console.log('card props hi', this.props.users);
    this.state = {
      show: false
    }
  }

  showDiv(e) {
    this.setState({ show: !this.state.show })
  }

  render() {
    const id = this.props.id;
    return (
      <div className={`${this.props.statusName}-card`} id='hellobro'>
        <div className="title">Title: {this.props.title}</div>
        <div className="body">Body: {this.props.body}</div>
        <div className="priority_id">Priority: {this.props.priority}</div>
        <div className="created_by">Created By: {this.props.created_by}</div>
        <div className="assigned_to">Assigned To: {this.props.assigned_to}</div>
        <button className="button" onClick={this.showDiv.bind(this)}>button</button>
        <button className="del" onClick={() => { this.props.deleteCard(id) }}>del</button>
        {this.state.show && <EditCardForm id={id} users={this.props.users} created_by={this.props.created_by} status_id={this.props.status_id}>
          <EditCardButton
            statusName={this.props.statusName}
            title={this.props.title}
            body={this.props.body}
            priority={this.props.priority}
            created_by={this.props.created_by}
            assigned_to={this.props.assigned_to}
          />
        </EditCardForm>}

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: card => {
      dispatch(deleteCard(card))
    }
  }
}

export default connect(null, mapDispatchToProps)(Card)