import React from "react";
import {connect} from 'react-redux'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {setCurrentUser} from './../../redux/user/user.actions'

import "./login.style.scss";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      validUsername : undefined,
      validPassword : undefined
    };
  }

  handleSubmit = event => {
      event.preventDefault();
      const {setCurrentUser} = this.props;
      const {username} = this.state;
      setCurrentUser(username);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validateEmail = event => {
      const email = event.target.value;
      const regex = /^[a-z0-9!"$%&/]{8,20}$/i
      const valid = regex.test(email)
      this.setState({validUsername : valid})
  }

  validatePassword = event => {
      const password = event.target.value;
      const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!"$%&/])[a-zA-Z0-9!"$%&/]{8,20}$/;
      const valid = regex.test(password)
      this.setState({validPassword : valid})
  }

  enableButton = () =>{
      const {validUsername, validPassword} = this.state;
      return (validUsername && validPassword)
  }

  render() {
    const { username, password, validUsername, validPassword } = this.state;
    return (
      <div className="login">
        <div className="login-form">
          <div className="login-form__content">
            <h2 className="login-form__content__title">Login</h2>
            <form className="login-form__inputs" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="username"
                label="Username"
                value={username}
                handleChange={this.handleChange}
                onBlur={this.validateEmail}
                valid={validUsername}
                errorLabel="Please enter a valid username"
                required
              />
              <FormInput
                type="password"
                name="password"
                label="Password"
                value={password}
                handleChange={this.handleChange}
                onBlur={this.validatePassword}
                valid={validPassword}
                errorLabel="Please enter a valid password"
                required
              />
              <CustomButton type="submit" disabled={!this.enableButton()}>Enter</CustomButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchToProps)(Login);
