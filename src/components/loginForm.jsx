import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // call the server
    console.log("success");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          {this.renderInput(
            "username",
            "Username",
            "text",
            "Please enter your username or email"
          )}
          {this.renderInput(
            "password",
            "Password",
            "password",
            "Dont let anyone know you password"
          )}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
