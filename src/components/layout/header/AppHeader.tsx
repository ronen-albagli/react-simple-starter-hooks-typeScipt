import React from "react";
import "../app.layout.scss";
import AppLogo from "./Logo/Logo";
// import Avatar from "./Avatar/Avatar";
import Button from "../../buttons/Button";
import Avatar from "./Avatar/Avatar";

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
      {props.user ? (
        <Avatar user={props.user} />
      ) : (
        <Button
          shape={"rounded"}
          title={"Login"}
          btnStyle={"full"}
          color={"primary"}
          fn={props.openModel}
        />
      )}
    </div>
  );
};

export default Header;
