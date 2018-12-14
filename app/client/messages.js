import React, { Component } from 'react';
import Axios from 'axios';

// shows all messages from database
export default class Messages extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
    this.colors = ['#00539C','#0074D9','#7FDBFF','#39CCCC','#3D9970','#2ECC40','#01FF70','#FFDC00','#FF851B','#FE840E','#BD3D3A','#E94B3C','#FF4136','#FF6F61','#F012BE','#C62168','#6B5B95','#B10DC9','#DBB1CD'];
  }
  
  render () {
    if(this.props.messages.data) {
      return (
        <div>
          {this.props.messages.data.map(message => {
            const color = this.colors[Math.floor(Math.random() * this.colors.length)]
            return (
              <div className='wrapper' style={{borderBottomColor:color}} key={String(message.created)}>
              <div className='message-wrapper'>
                <h3 className='message'>{message.message}</h3>
                <span>
                  <h5 className='username'>{message.username}</h5>
                  <h6 className='timestamp'>{message.created}</h6>
                </span>
              </div>
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