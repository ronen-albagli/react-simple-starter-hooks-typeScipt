import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getChallenge } from "../../../store/actions/battle.action";

const Challenge = (props: any) => {
  const [challengeState, setChallengeState] = useState({});

  useEffect(() => {
    const {
      match: {
        params: { id }
      }
    } = props;
    props.dispatch(getChallenge(id));
  }, []);

  return (
    <div className="challenge-container">
      <div className="challenge-header">
        {/* timer */}
        {/* char counter */}
        {/* something else */}
      </div>
      <div className="challenge-interface">
        <div className="editor"></div>
        <div className="terminal"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    challenge: state.battle.currentChallenge
  };
};

export default connect(mapStateToProps)(Challenge);
