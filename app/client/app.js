import React, { Component } from 'react';
import Login from './login';
import Signup from './signup';

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
      return <div><h1>{'welcome :) ' + this.state.username}</h1></div>
    }
  }
}