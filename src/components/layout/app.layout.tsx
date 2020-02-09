import React from "react";
import Header from "./header/AppHeader";
import "./app.layout.scss";
const AppLayout = (props: any) => {
  return (
    <div className="app-layout">
      <Header openModel={props.openModel} user={props.activeUser} />
    </div>
  );
};

export default AppLayout;
