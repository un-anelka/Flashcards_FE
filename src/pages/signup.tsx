import { useMutation } from "@apollo/client";
import { Button } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";
import React, { useEffect } from "react";
import { CREATE_USER, LOGIN_USER } from "../lib/querries";
const Signup = () => {
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => {},
  });
  //@ts-ignore
  const handleSignUp = (e) => {
    e.preventDefault();
    let target_id = e.target.parentElement.id;
    console.log("target_id", target_id);
    createUser({
      variables: {
        email: "un.new@gmail.com",
        password: "123456",
        name: "UN Matata",
      },
    });
  };

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      console.log("data", data);
      localStorage.setItem("token", data.login.token);
    },
  });

  //@ts-ignore
  const handleLogin = (e) => {
    e.preventDefault();
    let target_id = e.target.parentElement.id;
    console.log("target_id", target_id);
    loginUser({
      variables: {
        email: "un.new@gmail.com",
        password: "123456",
      },
    });
  };

  return (
    <div className="signup" id="signup-id">
      <h1>SignUp Page</h1>
      <Button onClick={handleSignUp}>SignUp</Button>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Signup;
