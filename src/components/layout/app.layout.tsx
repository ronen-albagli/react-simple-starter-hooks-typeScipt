import React from "react";
import Header from "./header/AppHeader";
import "./app.layout.scss";
const AppLayout: React.FC = () => {
  return (
    <div className="app-layout">
      <Header />
    </div>
  );
};

export default AppLayout;
