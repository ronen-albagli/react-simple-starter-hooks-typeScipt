import React from "react";
import "./heat.scss";
const HeartRate = () => {
  return (
    <svg className="heart" viewBox="0 0 32 29.6">
      <path
        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
      />
      <defs>
        <linearGradient id="Gradient1">
          <stop style={{ stopColor: "red" }} offset="0%" />
          <stop style={{ stopColor: "black" }} offset="50%" />
          <stop style={{ stopColor: "blue" }} offset="100%" />
        </linearGradient>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="red" />
          <stop offset="50%" stop-color="black" stop-opacity="0" />
          <stop offset="100%" stop-color="blue" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeartRate;
