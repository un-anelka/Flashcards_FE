import { Button, Link } from "@mui/material";
import React from "react";

const SignInLayout = () => {
  //@ts-ignore
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "./";
  };
  //@ts-ignore
  const handleDashboard = (e) => {
    e.preventDefault();
    window.location.href = "./books";
  };
  return (
    <div className="navbar-one">
      <Button variant="contained" onClick={handleClick}>
        Home
      </Button>
      <Button variant="contained" onClick={handleDashboard}>
        Dashboard
      </Button>
    </div>
  );
};

export default SignInLayout;
