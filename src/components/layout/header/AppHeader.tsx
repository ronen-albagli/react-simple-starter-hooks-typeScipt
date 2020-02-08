import React from "react";
import "../app.layout.scss";
import AppLogo from "./Logo/Logo";
// import Avatar from "./Avatar/Avatar";
import Button from "../../buttons/Button";

const Header = (props: any) => {
  const listItems = ["Create", "Challenge", "Battle"];
  const renderHeaderItems = () => {
    return listItems.map((element: string) => (
      <div key={element} className="header-list-item">
        {element}
      </div>
    ));
  };
  return (
    <div className="app-header">
      <div className="header-right">
        <AppLogo />
        {renderHeaderItems()}
      </div>
      {/* <Avatar /> */}
      <Button
        shape={"rounded"}
        title={"Login"}
        btnStyle={"full"}
        color={"primary"}
        fn={props.openModel}
      />
    </div>
  );
};

export default Header;
