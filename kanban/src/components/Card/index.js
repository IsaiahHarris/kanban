import React from 'react';
import '../../styles.css'
import PropTypes from 'prop-types';
import EditCardButton from '../EditCardButton';
import EditCardForm from '../EditCardForm';


class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  showDiv(e) {
  this.setState({show: !this.state.show})
  
}
render() {
  console.log('this.state', this.state);
    return (
      <div className={`${this.props.statusName}-card`}>
        <div className="title">Title: {this.props.title}</div>
        <div className="body">Body: {this.props.body}</div>
        <div className="priority_id">Priority: {this.props.priority}</div>
        <div className="created_by">Created By: {this.props.created_by}</div>
        <div className="assigned_to">Assigned To: {this.props.assigned_to}</div>
        <button className="button" onClick={this.showDiv.bind(this)}>button</button>
        <div className="test">hihihih</div>
        {this.state.show && <h1>hi</h1> }
        <EditCardForm>
          <EditCardButton
            statusName={this.props.statusName}
            title={this.props.title}
            body={this.props.body}
            priority={this.props.priority}
            created_by={this.props.created_by}
            assigned_to={this.props.assigned_to}
          />

        </EditCardForm>
      </div>

    )
  }
}
// const Card = ({ title, body, statusName, priority, status_id, created_by, assigned_to, label, showEditForm }) => (
//   <div className={`${statusName}-card`}>
//     <div className="title">Title: {title}</div>
//     <div className="body">Body: {body}</div>
//     <div className="priority_id">Priority: {priority}</div>
//     <div className="created_by">Created By: {created_by}</div>
//     <div className="assigned_to">Assigned To: {assigned_to}</div>
//     <button className="button" onClick ={showEditForm.bind()}>button</button>
//     <div className=""></div>
//     <EditCardForm>
//     <EditCardButton
//       statusName={statusName}
//       title={title}
//       body={body}
//       priority={priority}
//       created_by={created_by}
//       assigned_to={assigned_to}
//     />

//     </EditCardForm>
//   </div>


// )
// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired
// }

export default Card;