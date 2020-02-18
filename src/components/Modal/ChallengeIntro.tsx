import React from "react";
import Button from "../buttons/Button";
import "./Modal.scss";
const ChallengeIntroModal = (props: any) => {
  return (
    <div className="intro-modal">
      <div className="intro-background">
        <div className="top">
          <div className="left">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="right">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="bottom">
          <Button
            title={`Let's Start!`}
            shape={"rounded"}
            btnStyle={"full"}
            color={"primary"}
            fn={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default ChallengeIntroModal;
