import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Card from './components/Card'
import './App.css';
import NewCardForm from './components/NewCardForm'
import CardList from './components/CardList';
import Header from './components/Header'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [
        { title: 'card1', body: 'body1', priority: '1', status: 1, created_by: 1, assigned_to: 1 },
        { title: 'card2', body: 'body2', priority: '2', status: 3, created_by: 2, assigned_to: 1 },
        { title: 'card3', body: 'body3', priority: '3', status: 2, created_by: 1, assigned_to: 1 },
      ],
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

  componentDidMount(){
    axios.get('/api/cards')
    .then(response=>{
      this.setState({cards: response.data})
    })
    .catch(err=>{
      console.log(err)
    })
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
    console.log('clicked')
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
      console.log(err.message)
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CardList cards={this.state.cards} className='cards' />
        <NewCardForm
        changeHandler= {this.handleInputChange}
        formHandler = {this.addNewCard}
        titleInput = {this.state.titleInput}
        bodyInput = {this.state.bodyInput}
        priorityInput = {this.state.priorityInput}
        statusInput = {this.state.statusInput}
        created_byInput = {this.state.created_byInput}
        assigned_toInput = {this.state.assigned_toInput}
        />
      </div>
    );
  }
}

export default App;
