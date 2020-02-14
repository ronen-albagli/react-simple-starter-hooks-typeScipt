import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getChallenge } from "../../../store/actions/battle.action";
import BattleIDE from "../../../components/IDE/battleIDE";
import "./Challenge.scss";
import Box from "../../../components/box/Box";
import Timer from "../../../components/Timer/Timer";
import { parseSecondToMin } from "../../../helpers/time.helper";

class Challenge extends React.Component<any, any> {
  state = {
    codeStr: ""
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.dispatch(getChallenge(id));
  }
  // const [challengeState, setChallengeState] = useState({
  //   codeStr: "function",
  //   userCode: ""
  // });

  // useEffect(() => {
  //   const {
  //     match: {
  //       params: { id }
  //     }
  //   } = props;
  //   console.log("ppppp", props);
  //   props.dispatch(getChallenge(id));
  // }, []);

  // const {
  //   name,
  //   description,
  //   desire,
  //   difficulty,
  //   duration,
  //   paramsNames,
  //   inputs
  // } = props.challenge as challenge;

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (nextProps !== this.props) {
      if (!this.props.challenge.name && nextProps.challenge.name) {
        this.createIntialFunctionCode(nextProps.challenge);
        return true;
      }
      return true;
    }
    if (nextState !== this.state) {
      return true;
    }
    return false;
  }

  updateUserAnswer = (userAnswer: string) => {
    const newState = { ...this.state };
    newState.codeStr = userAnswer;
    this.setState(() => ({ ...newState }));
  };

  createIntialFunctionCode = (challenge: challenge) => {
    const {
      name,
      description,
      desire,
      difficulty,
      duration,
      paramsNames,
      inputs
    } = challenge;
    console.log(paramsNames);
    const formatedCode = `\t // ${description}
   // You got ${parseSecondToMin(parseInt(duration as string))} \n
   function ${name} (${paramsNames && paramsNames.join(", ")}) {\n\n
   }
    `;
    const newState = { ...this.state };
    newState.codeStr = formatedCode;
    console.log("formatedCode", formatedCode);
    this.setState(() => ({ ...newState }));
  };
  render() {
    return (
      <div className="challenge-container">
        <div className="challenge-title">
          Challenge - {this.props.challenge.name || ""}
        </div>

        <div className="challenge-interface">
          <div className="editor">
            <div className="challenge-boxes">
              <Box height={"100%"} width={"25%"}>
                <div>TIME</div>
                <Timer duration={this.props.challenge.duration || 0} />
              </Box>
              <Box height={"100%"} width={"25%"}>
                <div>Char Length</div>
                <div style={{ fontSize: "45px" }}>
                  {this.state.codeStr.length}
                </div>
              </Box>
              <Box height={"100%"} width={"25%"} />
            </div>
            <BattleIDE
              challengeStr={this.state.codeStr}
              onUpdate={this.updateUserAnswer}
            />
          </div>
          <div className="terminal"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    challenge: state.battle.currentChallenge || {},
    timer: state.Timer
  };
};

export default connect(mapStateToProps)(Challenge);
