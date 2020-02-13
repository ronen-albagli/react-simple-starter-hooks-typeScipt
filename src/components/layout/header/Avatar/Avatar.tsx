import React from "react";
import "../../app.layout.scss";
import { Link } from "react-router-dom";
const Avatar = (props: any) => {
  return (
    <div className="avatar-container">
      <div className="avatar-circle">
        <img
          style={{ height: props.height ? props.height : "35px" }}
          alt=""
          src={
            props.user &&
            props.user.picture &&
            props.user.picture.data &&
            props.user.picture.data.url
          }
        />
      </div>
      <AvatarDDL />
    </div>
  );
};

const AvatarDDL = () => {
  const list = [
    { name: "profile", route: "/user/profile" },
    { name: "my activity", route: "my-activity" },
    { name: "settings", route: "settings" },
    { name: "logout", route: "" }
  ];
  return (
    <div className="avatar-ddl">
      {list.map((element: any) => (
        <Link to={element.route}>{element.name}</Link>
      ))}
    </div>
  );
};
export default Avatar;
