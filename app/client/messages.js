import React, { Component } from 'react';
import Axios from 'axios';

// shows all messages from database
export default class Messages extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  
  render () {
    if(this.props.messages.data) {
      return (
        <div>
          {this.props.messages.data.map(message => {
            return (
              <div key={String(message.created)}>
                <h5>{message.username}</h5>
                <h3>{message.message}</h3>
                <h6>{message.created}</h6>
              </div>
              )
          })}
        </div>
      )
    } else {
      return (
        <div>
          <h4>
            err getting messages...
          </h4>
        </div>
      )
    }
  }
}