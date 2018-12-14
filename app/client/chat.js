import React, { Component } from 'react';
import Messages from './messages'
import Chats from './chats';
import Axios from 'axios';

// parent of all chat components
// complete ui from chat
// handles chats & messages
export default class Chat extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      messages: [],
    }
    this.addMessages = this.addMessages.bind(this);
  }

  addMessages (m) {
    this.setState({
      messages: m
    })
  }

  componentDidMount () {
    Axios.post('http://localhost:3000', {
      type: 'all'
    })
    .then(d=>{
      console.log('data ->', d.data.reverse());
      this.setState({messages:d})
    })
    .catch(err=>console.log(err))
  }

  render () {
    return (
      <div>
        <div>
          <h2>chat</h2><button onClick={this.props.logout}>logout</button>
          <h3>{'user: ' + this.props.username}</h3>
        </div>
        <div>
          <Chats addMessages={this.addMessages} username={this.props.username} />
        </div>
        <div>
          <Messages messages={this.state.messages} />
        </div>
      </div>
    ) 
  }
}