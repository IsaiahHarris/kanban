import React from 'react';


import { connect } from 'react-redux';
import { loadCards } from '../../actions';

import './App.css';
import NewCardForm from '../NewCardForm'

import Header from '../Header'
import Column from '../Column'
class App extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.loadCards();

  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-body">
          <Column status_id={this.props.status_id} label="QUEUE" cards={this.props.cards} />
          <Column status_id={this.props.status_id} label="In Progress" cards={this.props.cards} />
          <Column status_id={this.props.status_id} label="Done" cards={this.props.cards} />
        </div>
        <NewCardForm />
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {
    cards: state.cardsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      dispatch(loadCards())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
