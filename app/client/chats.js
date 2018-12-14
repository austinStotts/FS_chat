import React, { Component } from 'react';

// creates chats and sends to server to updtae database 
// updates messages to render the new message
export default class Chats extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <input placeholder="message..."></input><button>send</button>
      </div>
    )
  }
}