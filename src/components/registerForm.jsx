import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterFrom extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = () => {
    console.log("you registeration done successfully");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
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
          {this.renderInput(
            "name",
            "Name",
            "name",
            "Please enter your first name and your surname"
          )}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterFrom;
