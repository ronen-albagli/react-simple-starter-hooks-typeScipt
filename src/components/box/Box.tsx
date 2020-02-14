import React from "react";
import "./Box.scss";

const Box = (props: any) => (
  <div
    className="box"
    style={{ height: props.height || "100%", width: props.width || "100%" }}
  >
    {props.children}
  </div>
);

export default Box;
