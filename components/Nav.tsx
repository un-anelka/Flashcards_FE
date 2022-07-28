import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <Link href="/">
          <h1> Logo</h1>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="./links">
          <a> All Links</a>
        </Link>
        <Link href="./books">
          <a> SignIn</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
