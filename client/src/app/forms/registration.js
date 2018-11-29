import React from 'react';
import { Redirect } from 'react-router-dom'
import { createNewUser } from '../services/user-service';

import './Registration.scss';

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginSuccessful: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToDashboard = this.redirectToDashboard.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    createNewUser(this.state).then(resp => {
      this.setState({loginSuccessful: true})
    });
  }
  redirectToDashboard() {
    return <Redirect to={'/dashboard'}/>
  }

  render() {
    return (
      <div className="reg-form-container">
        <form className="reg-form" onSubmit={this.handleSubmit}>
          {this.state.loginSuccessful && this.redirectToDashboard() }
          {/* <label className="input-field firstname">
            First Name:
            <input onChange={ this.handleChange } type="text" name="firstName" />
          </label>
          <label className="input-field lastname">
            Last Name:
            <input onChange={ this.handleChange } type="text" name="lastName" />
          </label> */}
          <label className="input-field email">
            email:
            <input onChange={ this.handleChange } type="text" name="email" />
          </label>
          <label className="input-field password">
            Password:
            <input onChange={ this.handleChange } type="text" name="password" />
          </label>
          <input className="submit-button" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default RegForm;