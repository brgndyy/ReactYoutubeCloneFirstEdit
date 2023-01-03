import React from "react";
import { BsYoutube } from "react-icons/bs";
import HeaderSearchFrom from "./HeaderSearchFrom";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header_Container}>
      <Link to={"/"} className={classes.header_logo}>
        <BsYoutube className={classes.youtube_icon} />
        <h1>Youtube</h1>
      </Link>

      <HeaderSearchFrom />
    </header>
  );
}

export default Header;
