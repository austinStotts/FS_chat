import React, { Component } from 'react';
import Messages from './messages'
import Chats from './chats';

// parent of all chat components
// complete ui from chat
// handles chats & messages
export default class Chat extends Component { 
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <div>
          <h2>chat</h2><button onClick={this.props.logout}>logout</button>
          <h3>{'user: ' + this.props.username}</h3>
        </div>
        <div>
          <Chats />
        </div>
        <div>
          <Messages />
        </div>
      </div>
    ) 
  }
}