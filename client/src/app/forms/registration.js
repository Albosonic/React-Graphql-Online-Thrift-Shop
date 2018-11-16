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
      <form className="reg-form" onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input onChange={ this.handleChange } type="text" name="firstName" />
        </label>

        <label>
          Last Name:
          <input onChange={ this.handleChange } type="text" name="lastName" />
        </label>

        <label>
          email:
          <input onChange={ this.handleChange } type="text" name="email" />
        </label>

        <label>
          Password:
          <input onChange={ this.handleChange } type="text" name="passowrd" />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default RegForm;