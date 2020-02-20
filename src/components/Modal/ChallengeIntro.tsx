import React from "react";
import Button from "../buttons/Button";
import "./Modal.scss";
const ChallengeIntroModal = (props: any) => {
  return (
    <div className="intro-modal">
      <div className="intro-background">
        <div className="top">
          <div>Before Getting Started</div>
          <div>Your challenge is ${}</div>
          <div>Your goal is: ${}</div>
          <div>
            When your opponent will be ready you be able to start the battle{" "}
          </div>
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
            style={{
              height: "40px",
              width: "150px",
              fontWeight: 700,
              color: "white",
              backgroundColor: "#FFC107"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChallengeIntroModal;
