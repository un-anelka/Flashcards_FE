import { Button, Link } from "@mui/material";
import React from "react";

const Layout = () => {
  //@ts-ignore
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "./";
  };
  return (
    <div className="navbar-one">
      <Button variant="contained" onClick={handleClick}>
        Home
      </Button>
      <Button variant="contained" onClick={handleClick}>
        Sign Out
      </Button>
    </div>
  );
};

export default Layout;
