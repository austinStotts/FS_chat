import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      type: 'login',
      err: ''
    }
    this.checkDB = this.checkDB.bind(this);
  }

  checkDB () {
    let u = this.state.username;
    let p = this.state.password;
    if(u.length > 0 && p.length > 0) {
      Axios.post('http://localhost:3000', {
        username: u,
        password: p,
        type: 'login'
      }).then(res=>{
        if(res.status === 201) {console.log('code 201... bad password'); this.setState({err:'invalid username or password'})}  // if not found
        else if(res.status === 200) { console.log('code 200... passed!'); this.props.loggedIn(u)} // if found
      }).catch(err=>{
        console.log(err);
      })
    } else {
      this.setState({
        err: 'no username or password given'
      })
      // no username or password given
    }
  }

  render () {
    return (
      <div>
        <h4>login</h4>
        <div><input placeholder="username" onChange={e=>this.setState({username:e.target.value})}></input></div>
        <div><input placeholder="password" onChange={e=>this.setState({password:e.target.value})}></input></div>
        <div><button onClick={_=>this.checkDB()}>Submit</button></div>
        <div><button onClick={_=>{console.log('go to signup'); this.props.signup()}} onMouseOver={e=>e.currentTarget.textContent="signup"} onMouseLeave={e=>e.currentTarget.textContent="new?"}>{'new?'}</button></div>
        <div><h3><em>{this.state.err}</em></h3></div>
      </div>
    )
  }
}

export default Login;