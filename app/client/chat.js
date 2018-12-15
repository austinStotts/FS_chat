import React, { Component, Suspense } from 'react';
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
    this.colors = ['#0074D9','#7FDBFF','#39CCCC','#3D9970','#2ECC40','#01FF70','#FFDC00','#FF851B','#85144b','#F012BE','#B10DC9'];
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
          <button onClick={this.props.logout}>logout</button>
          <h3 className='user-id'>{'user: '}<p className='user'
          style={{color:'#FFDC00'}}
          >{this.props.username}</p></h3>
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