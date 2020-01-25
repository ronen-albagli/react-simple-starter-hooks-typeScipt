import React from "react";
import "../../app.layout.scss";

const Avatar = (props: any) => {
  return (
    <div className="avatar-container">
      <div className="avatar-circle">
        <img
          style={{ height: props.height ? props.height : "35px" }}
          alt=""
          src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
        />
      </div>
    </div>
  );
};

export default Avatar;
