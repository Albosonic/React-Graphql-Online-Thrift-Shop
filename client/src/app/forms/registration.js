import React from 'react';

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }
  handleChange(e) {
    const name = e.target.name;
    this.setState({[name]: e.target.value})
    console.log(this.state);
  }
  handleSubmit(e) {

  }
  render() {
    return (
      <form className="reg-form">
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
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default RegForm;