import React, { useState } from "react";
import {
  Router,
  Route,
  Switch
  // Link, NavLink
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import App from "../App";
import NewBattle from "../screens/new-battle/newBattle";
import AppLayout from "../components/layout/app.layout";
import Loader from "../components/loader/Loader";
import { connect } from "react-redux";
import Toaster from "../components/alertCenter/Toaster";
import AppLogin from "../screens/Auth/login";
import {
  userLoggedInViaSocial,
  userLoggedOutInStart
} from "../store/actions/auth.action";

export const history = createHistory();

const AppRouter: React.FC = (props: any) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  return (
    <Router history={history}>
      <AppLayout openModel={() => setLoginOpen(true)} activeUser={props.user} />
      <div className="app-content">
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/battle/create" component={NewBattle} exact={true} />
        </Switch>
      </div>
      <Loader show={props.showLoader} />
      <Toaster />
      <AppLogin
        open={isLoginOpen}
        closeModal={() => setLoginOpen(false)}
        loginSocial={props.login}
        logoutSocial={props.logout}
        isUserLoggedIn={props.user ? true : false}
      />
    </Router>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // dispatching plain actions
    login: (userDate: any) => dispatch(userLoggedInViaSocial(userDate)),
    logout: (user: any) => dispatch(userLoggedOutInStart(user))
  };
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    showLoader: state.UI.showLoader,
    user: state.auth.activeUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
