import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  showForm() {
    let addCardForm =
      document.getElementById('NewCardForm-container-show') ||
      document.getElementById('NewCardForm-container');
    if (addCardForm.id === 'NewCardForm-container') {
      addCardForm.id = 'NewCardForm-container-show';
    } else if (addCardForm.id === 'NewCardForm-container-show') {
      addCardForm.id = 'NewCardForm-container';
    }
  }

  render() {
    return (
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <div className="Header-title">KANBAN</div>
        <div className="add-task-button" onClick={this.showForm.bind(this)}>
          ➕ NEW TASK
        </div>
      </header>
    );
  }
}

export default Header;
