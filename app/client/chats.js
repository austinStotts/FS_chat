import React, { Component } from 'react';
import Axios from 'axios';

// creates chats and sends to server to updtae database 
// updates messages to render the new message
export default class Chats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
    this.send = this.send.bind(this);
  }

  send () {
    let message = this.state.text;
    Axios.post('http://localhost:3000', {
      username: this.props.username,
      message: message,
      type: 'add'
    })
    .then(d=>{console.log('back from server', d.data.reverse()); this.props.addMessages(d)})
    .catch(err=>console.log('err', err));
  }

  render () {
    return (
      <div>
        <input placeholder="message..." onChange={e=>this.setState({text:e.target.value})}></input><button onClick={this.send}>send</button>
      </div>
    )
  }
}