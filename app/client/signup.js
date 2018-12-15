import React, { Component } from 'react';
import Axios from 'axios';

class Signup extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      err: '',
      err2: ''
    }
    this.checkDB = this.checkDB.bind(this);
  }

  checkDB () {
    const u = this.state.username;
    const p = this.state.password;
    if(u.length > 0 && p.length >= 8) {
      Axios.post('http://localhost:3000', { // change to signup spec
        username: u,
        password: p,
        type: 'signup'
      }).then(res=>{
        if(res.status === 201) {this.setState({err:'username already taken'})}  // if not found
        else if(res.status === 200) {this.props.loggedIn(u)} // if found
      }).catch(err=>{
        console.log(err);
      })
    } else {
      this.setState({err:'invalid username or password',err2:'password must be 8 characters long'})
    }
  }

  render () {
    return (
      <div>
        <h4 className='login-text'>signup</h4>
        <div><input className='username-input' placeholder=" username" onChange={e=>this.setState({username:e.target.value})}></input></div>
        <div><input className='password-input' placeholder=" password" onChange={e=>this.setState({password:e.target.value})}></input></div>
        <div><button className='login-submit' onClick={_=>this.checkDB()}>Submit</button></div>
        <div><button className='switch'onClick={_=>{console.log('go to login'); this.props.login()}} onMouseOver={e=>e.currentTarget.textContent="login"} onMouseLeave={e=>e.currentTarget.textContent="back?"}>{'back?'}</button></div>
        <div><h3><em>{this.state.err}</em></h3></div>
        <div><h3><em>{this.state.err2}</em></h3></div>
      </div>
    )
  }
}

export default Signup;