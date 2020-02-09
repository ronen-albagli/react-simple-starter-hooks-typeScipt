import React from "react";
import "../../app.layout.scss";

const Avatar = (props: any) => {
  return (
    <div className="avatar-container">
      <div className="avatar-circle">
        <img
          style={{ height: props.height ? props.height : "35px" }}
          alt=""
          src={props.user && props.user.picture.data.url}
        />
      </div>
    </div>
  );
};

export default Avatar;
