import React, { useState } from "react";
import AppModal from "../../components/Modal/Model";
import { TextInput } from "../../components/inputs/input.txt";
import "./Login.scss";
import Button from "../../components/buttons/Button";
import fb from "../../assets/icons/facebook-logo.png";
import gl from "../../assets/icons/search.png";

const AppLogin = (props: any) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });

  const handleChange = (event: any) => {
    const newState = { ...loginForm };
    (newState as any)[`${event.target.name}`] = event.target.value;
    setLoginForm({ ...newState });
  };
  return (
    <AppModal>
      <div className="login-title">Log / Sign in To Battle</div>
      <div className="login-content">
        {/* <div className="with-email">
          {Object.keys(loginForm).map((formKey: string) => (
            <TextInput
              label={formKey}
              active={false}
              name={formKey}
              value={(loginForm as any)[formKey]}
              change={handleChange}
              type={
                formKey === "password"
                  ? "password"
                  : formKey === "email"
                  ? "email"
                  : "text"
              }
            />
          ))}
        </div>
        <div className="divider"></div> */}
        <div className="with-social">
          {["email", "password"].map((formKey: string) => (
            <TextInput
              label={formKey}
              active={false}
              name={formKey}
              value={(loginForm as any)[formKey]}
              change={handleChange}
              type={
                formKey === "password"
                  ? "password"
                  : formKey === "email"
                  ? "email"
                  : "text"
              }
            />
          ))}
          <Button
            title={"Login"}
            fn={() => {}}
            btnStyle={"full"}
            shape={"rounded"}
            color={"danger"}
          />
        </div>
      </div>
      <div>OR</div>
      <div className="login-social">
        <div className="title">Login with your social network</div>
        <div className="actions">
          <img
            style={{
              height: props.height ? props.height : "20px",
              margin: "10px"
            }}
            alt=""
            src={fb}
          />
          <img
            style={{
              height: props.height ? props.height : "20px",
              margin: "10px"
            }}
            alt=""
            src={gl}
          />
        </div>
      </div>
    </AppModal>
  );
};

export default AppLogin;
