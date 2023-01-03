import React from "react";
import classes from "./Card.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Card() {
  return (
    <div className={classes.Card_Container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Card;
