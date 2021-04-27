import React from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import AuthService from "./Authentication";

import axios from "axios";

const reg_url = "http://localhost:8000/";

class RegisterForm extends React.Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = e => {
    e.preventDefault();
    axios.post(reg_url + "users/", this.state).then(() => {
      console.log(this.state);
      this.props.resetState();
      this.props.toggle();
    })
    .catch(() => {
      this.setState({ error: "Please enter a correct username"})
    });
  };

  render() {
    const details = "Please enter username without special characters"
    return (
      
      <Form onSubmit={this.handleRegister}>
        <p>{details}</p>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
            required
            />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            required
          />
        </FormGroup>
        <p>{this.state.error}</p>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default RegisterForm;
