import { Button, Link } from "@mui/material";
import React from "react";
import Nav from "./Nav";

//@ts-ignore
const Layout = ({ children }) => {
  //@ts-ignore
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "./";
  };
  return (
    <div className="navbar-one">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
