import React from "react";
import "./Modal.scss";
const AppModal = (props: any) => {
  return (
    <div className="modal-container">
      <div className="overlay"></div>
      <div className="modal">{props.children}</div>
    </div>
  );
};
export default AppModal;
