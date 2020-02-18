import React from "react";
import "./Modal.scss";
const AppModal = (props: any) => {
  return (
    <div className={`modal-container ${props.show ? "visible" : "hidden"}`}>
      <div className="overlay" onClick={props.close}></div>

      <div style={props.style} className="modal">
        {props.children}
      </div>
    </div>
  );
};
export default AppModal;
