import React from "react";
import "./Button.scss";

type ButtonProps = {
  btnStyle: String;
  shape: String;
  title: String;
  color: String;
  fn: () => any;
};

const Button = (props: ButtonProps) => {
  return (
    <div
      className={`button-container ${props.shape} ${props.btnStyle} ${props.color}`}
      onClick={props.fn}
    >
      <div>{props.title}</div>
    </div>
  );
};

export default Button;
