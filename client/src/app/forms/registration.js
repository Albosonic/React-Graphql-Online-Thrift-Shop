import './Registration.scss';

import React from 'react';
import { Redirect } from 'react-router-dom'
import { createNewUser, loginUser } from '../services/user-service';

class RegForm extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      loginSuccessful: false,
      entryMode: 'Register'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.heandleloginRegViews = this.heandleloginRegViews.bind(this);
    this.redirectToDashboard = this.redirectToDashboard.bind(this);    
  }
  handleChange(e) {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.entryMode === 'Register') {
      createNewUser(this.state).then(resp => {
        this.setState({loginSuccessful: resp.registration });      
      });      
    } else {
      loginUser(this.state.email).then(resp=> {
        this.setState({loginSuccessful: resp.login });
      })
    }
  }
  redirectToDashboard() {
    return <Redirect to={'/dashboard'}/>
  }

  heandleloginRegViews() {    
    if(this.state.entryMode === 'Register') {
      this.setState({ entryMode: 'Login' })
    } else {
      this.setState({ entryMode: 'Register' })
    }
  }

  render() {
    return (
      <div className="reg-form-container">        
        <form className="reg-form" onSubmit={this.handleSubmit}>
        { 
          this.state.entryMode === 'Register' &&
          <p className="login-reg-button" onClick={ this.heandleloginRegViews }>Login</p> 
        }
        {
          this.state.entryMode === 'Login' && 
          <p className="login-reg-button" onClick={ this.heandleloginRegViews }>Register</p> 
        }
          <h1>{ this.state.entryMode }</h1>
          { this.state.loginSuccessful && this.redirectToDashboard() }
          <label className="input-field email">
            email:
            <input className="input" onChange={ this.handleChange } type="text" name="email" />
          </label>
          <label className="input-field password">
            Password:
            <input className="input" onChange={ this.handleChange } type="text" name="password" />
          </label>
          <input className="submit-button" type="submit" value={ this.state.buttonText }/>
        </form>
      </div>
    )
  }
}

export default RegForm;