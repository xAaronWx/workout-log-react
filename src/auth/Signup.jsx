import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
  const [username, setUsername] = useState(""); //2
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Sign Up</h1>
      <Form>
        <FormGroup>
          <Label htmlFor="Username">Username</Label>
          <Input name="username" value={username} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input name="password" value={password} />
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
