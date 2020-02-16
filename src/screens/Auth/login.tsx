import React, { useState } from "react";
import AppModal from "../../components/Modal/Model";
import { TextInput } from "../../components/inputs/input.txt";
import "./Login.scss";
import Button from "../../components/buttons/Button";
import fb from "../../assets/icons/facebook-logo.png";
import gl from "../../assets/icons/search.png";

import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";

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

  const responseGoogle = (response: any) => {
    console.log(response);
  };
  const responseFacebook = (response: any) => {
    console.log("response", response);
    props.loginSocial(response);
  };

  return (
    <AppModal
      show={!props.isUserLoggedIn && props.open}
      close={props.closeModal}
    >
      <div className="header">
        <div className="login-title">Log-In</div>
        <div className="login-subtitle">Find Out Who Is The Best</div>
      </div>
      <div className="login-content">
        <div className="with-social">
          {["email", "password"].map((formKey: string) => (
            <TextInput
              key={formKey}
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
            style={{
              width: "100%",
              marginLeft: 0,
              marginTop: "50px",
              color: "white",
              backgroundColor: "#ff9800"
            }}
          />
        </div>
      </div>
      <div style={{ fontWeight: "bold" }}>OR</div>
      <div className="login-social">
        <div className="title">Login with your social network</div>
        <div className="actions">
          <div className="sa">
            <img
              style={{
                height: props.height ? props.height : "20px",
                margin: "10px"
              }}
              alt=""
              src={fb}
            />
            <div className="fb hidden">
              <FacebookLogin
                appId="539926940215177" //APP ID NOT CREATED YET
                fields="name,email,picture"
                callback={responseFacebook}
              />
            </div>
          </div>
          <div className="sa">
            <div className="gl hidden">
              <GoogleLogin
                clientId="40990008904-4l7j8fd6tulggksmfu2ghll2lk5mtfid.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </div>
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
      </div>
    </AppModal>
  );
};

export default AppLogin;
