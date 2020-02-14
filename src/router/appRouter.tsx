import React from "react";
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
  userLoggedOutInStart,
  userLoggedInStart
} from "../store/actions/auth.action";
import { showLogInModal } from "../store/actions/UI.actions";
import ChallengeListPage from "../screens/challenge/challengeListPage/ChallengeListPage";
import AppFooter from "../components/AppFooter/AppFooter";
import Challenge from "../screens/challenge/challenge/Challenge";

export const history = createHistory();

const AppRouter: React.FC = (props: any) => {
  return (
    <Router history={history}>
      <AppLayout
        openModel={() => props.showLogin(true)}
        activeUser={props.user}
      />
      <div className="app-content">
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/battle/create" component={NewBattle} exact={true} />
          <Route
            path="/challenge/list"
            component={ChallengeListPage}
            exact={true}
          />
          <Route path={`/challenge/:id`} component={Challenge} />
        </Switch>
      </div>
      <AppFooter />
      <Loader show={props.showLoader} />
      <Toaster />
      <AppLogin
        open={props.showLogInScreen}
        closeModal={() => props.showLogin(false)}
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
    showLogin: (status: Boolean) => dispatch(showLogInModal(status)),
    login: (userDate: any) => dispatch(userLoggedInStart(userDate)),
    logout: (user: any) => dispatch(userLoggedOutInStart(user))
  };
};

const mapStateToProps = (state: any) => {
  return {
    showLoader: state.UI.showLoader,
    user: state.auth.activeUser,
    showLogInScreen: state.UI.showLoginModal
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
