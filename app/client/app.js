import React, { Component } from 'react';
import Login from './login';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      login: false,
      signup: false
    }
  }


  render () {
    const l = this.state.login;
    const s = this.state.signup;
    // if login & signup = false
    if(!l && !s) {
      return <Login/>
    }

    // if login = false & signup = true
    else if (!l && s) {
      return
    }

    // if login = true
    else if (l) {
      return
    }
  }
}