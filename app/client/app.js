import React, { Component } from 'react';
import Login from './login';
import Signup from './signup';
import Chat from './chat';

// absolute parent for FS_chat app
export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      login: false,
      signup: false,
      username: ''
    }
    this.goSignup = this.goSignup.bind(this);
    this.goLogin = this.goLogin.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  goSignup () {
    this.setState({
      signup: true
    })
  }

  goLogin () {
    this.setState({
      signup: false
    })
  }

  loggedIn (un) {
    this.setState({
      login: true,
      username: un
    })
  }
  
  logout () {
    this.setState({
      login: false,
      signup: false,
      username: ''
    })
  }

  render () {
    const l = this.state.login;
    const s = this.state.signup;
    // if login & signup = false
    if(!l && !s) {
      return <Login signup={this.goSignup} loggedIn={this.loggedIn}/>
    }

    // if login = false & signup = true
    else if (!l && s) {
      return <Signup login={this.goLogin} loggedIn={this.loggedIn}/>
    }

    // if login = true
    else if (l) {
      return <div className='chat-main'><Chat logout={this.logout} username={this.state.username}/></div>
    }
  }
}