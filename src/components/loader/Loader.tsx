import React from "react";
import "./Loader.scss";

type LoaderProps = {
  show: Boolean;
};

export default (props: LoaderProps) => (
  <div className={`loader-container ${props.show ? "show" : "hide"}`}>
    <div className={`lds-ripple ${props.show ? "show" : "hide"}`}>
      <div></div>
      <div></div>
    </div>
  </div>
);
