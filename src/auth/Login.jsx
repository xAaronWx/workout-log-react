import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"; //1

const Login = (props) => {
  const [username, setUsername] = useState(""); //2
  const [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="Username">Username</Label>
          <Input name="username" value={username} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input name="password" value={password} />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
