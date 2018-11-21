import React from 'react';
import axios from 'axios';
import store from '../../redux/store';
import { updateUserInfo } from '../../redux/actions';

import './Registration.css';

const createNewUser = (user) => {
  console.log('user:', user)
  store.dispatch(updateUserInfo(user));
  axios.post('/users', user).then(resp => console.log(resp));
}

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    createNewUser(this.state);
  }

  render() {
    return (
      <div className="reg-form-container">
        <form className="reg-form" onSubmit={this.handleSubmit}>
          <label className="input-field firstname">
            First Name:
            <input onChange={ this.handleChange } type="text" name="firstName" />
          </label>

          <label className="input-field lastname">
            Last Name:
            <input onChange={ this.handleChange } type="text" name="lastName" />
          </label>

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