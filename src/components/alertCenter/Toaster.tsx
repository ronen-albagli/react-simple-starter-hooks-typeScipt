import React from "react";
import "./Toaster.scss";
import { connect } from "react-redux";
import { removeToasterAlert } from "../../store/actions/UI.actions";

const Toaster: React.FC = (props: any) => {
  if (props.msg && props.msg.length > 0) {
    setTimeout(() => {
      props.dispatch(removeToasterAlert());
    }, 100000);
  }

  return (
    <div className="toaster-container">
      {props.msg &&
        props.msg.map((alert: toasterMessage, index: number) => (
          <div className={`toaster-box ${alert.status}`}>
            <div className="toaster-msg">{alert.msg} </div>
            <div
              className="close"
              onClick={() => props.dispatch(removeToasterAlert(index))}
            ></div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    msg: state.UI.messages
  };
};

export default connect(mapStateToProps)(Toaster);
