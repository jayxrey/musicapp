import React from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import AuthService from "./Authentication";

import axios from "axios";

const reg_url = "http://localhost:8000/";

class RegisterForm extends React.Component {
  state = {
    username: "",
    password: ""
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
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleRegister}>
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

export default RegisterForm;
