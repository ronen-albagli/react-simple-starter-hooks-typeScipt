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
      <AvatarDDL logout={props.logout} />
    </div>
  );
};

const AvatarDDL = (props: any) => {
  const list = [
    { name: "profile", route: "/user/profile" },
    { name: "my activity", route: "my-activity" },
    { name: "settings", route: "settings" },
    { name: "logout", route: "", func: props.logout }
  ];
  return (
    <div className="avatar-ddl">
      {list.map((element: any) => (
        <Link
          key={element.name}
          to={element.route}
          onClick={props.logout ? props.logout : null}
        >
          {element.name}
        </Link>
      ))}
    </div>
  );
};
export default Avatar;
