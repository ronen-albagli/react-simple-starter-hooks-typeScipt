import React from "react";
import appLogo from "../../../../assets/img/ed0c21b2-665d-458a-878c-dec0f81760f9_200x200.png";
import "../../app.layout.scss";

const AppLogo: React.FC = () => (
  <div className="app-logo">
    <img alt="" src={appLogo} />
  </div>
);

export default AppLogo;
