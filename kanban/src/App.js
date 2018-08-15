import React from 'react';
import logo from './logo.svg';
import Card from './components/Card'
import './App.css';
import CardList from './components/CardList';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      cards:[
        {title: 'card1', body:'body1', priority: '1', status: 'Queue', created_by: 'bob', assigned_to: 'jeff'},
        {title: 'card2', body:'body2', priority: '2', status: 'Done', created_by: 'steve', assigned_to: null},
        {title: 'card3', body:'body3', priority: '3', status: 'In Progress', created_by: 'jeff', assigned_to: 'bob'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CardList cards = {this.state.cards}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
