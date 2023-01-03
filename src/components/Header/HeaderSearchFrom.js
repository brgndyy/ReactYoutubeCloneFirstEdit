import React from "react";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./HeaderSearchForm.module.css";

function HeaderSearchFrom() {
  const navigate = useNavigate();

  const ref = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    navigate(`/videos/${ref.current.value}`);

    ref.current.value = "";
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes.header_form}>
        <input
          className={classes.header_input}
          ref={ref}
          type={"text"}
          placeholder="Search..."
        ></input>
        <button className={classes.form_button}>
          <BiSearch className={classes.form_button_icon} />
        </button>
      </form>
    </>
  );
}

export default HeaderSearchFrom;
