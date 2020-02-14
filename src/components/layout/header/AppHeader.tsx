import React from "react";
import "../app.layout.scss";
import AppLogo from "./Logo/Logo";
import Button from "../../buttons/Button";
import Avatar from "./Avatar/Avatar";
import { Link } from "react-router-dom";

const Header = (props: any) => {
  const listItems = [
    { main: "Create", route: "/battle/create", children: [] },
    {
      main: "Challenge",
      route: "/challenge",
      children: [
        { name: "Create New Challenge", route: "/battle/create" },
        { name: "View Challenges", route: "/challenge/list" },
        { name: "Random Challenge", route: "/challenge/random" }
      ]
    },
    { main: "Battle", route: "/battle", children: [] }
  ];
  const renderHeaderItems = () => {
    return listItems.map((element: any) => (
      <div key={element.main} className="header-list-item">
        <Link to={element.route}>{element.main}</Link>
        <div className="header-ddl">
          {element.children.map((child: any) => (
            <div key={child.name} className="header-ddl-element">
              <Link to={child.route}>{child.name}</Link>
            </div>
          ))}
        </div>
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
