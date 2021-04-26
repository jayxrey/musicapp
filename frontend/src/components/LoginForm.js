import React from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import AuthService from "./Authentication";

import axios from "axios";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    logged_in: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    AuthService.login(this.state.username, this.state.password).then(() => {
      console.log(localStorage.getItem("user"));
      this.props.resetState();
      this.props.toggle();
      this.state.logged_in = true
    });
  };


  render() {
    return (
      <Form onSubmit={this.handleLogin}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
            />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default LoginForm;
