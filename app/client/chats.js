import React, { Component } from 'react';
import Axios from 'axios';

// creates chats and sends to server to updtae database 
// updates messages to render the new message
export default class Chats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      err: ''
    }
    this.send = this.send.bind(this);
  }

  send () {
    let message = this.state.text;
    if(message.length > 0) {
      Axios.post('http://localhost:3000', {
        username: JSON.stringify(this.props.username),
        message: JSON.stringify(message),
        type: 'add'
      })
      .then(d=>{
        console.log('back from server', d.data.reverse()); 
        this.props.addMessages(d);
        this.setState({text:'',err:''})
        this.refs.input.value = '';
      })
      .catch(err=>console.log('err', err));
    } else {
      this.setState({
        err:'no message input'
      })
    }
  }

  render () {
    return (
      <div className='chat-wrap-main'>
        <div className='chat-wrapper'>
          <input className='chat-input' maxLength='250' placeholder="message..." ref='input' onChange={e=>this.setState({text:e.target.value})}></input>
          <button className='chat-submit' onClick={_=>this.send()}>send</button>
          <p className='chat-err'><em>{this.state.err}</em></p>
        </div>
      </div>
    )
  }
}