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

export const history = createHistory();

const AppRouter: React.FC = (props: any) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  return (
    <Router history={history}>
      <AppLayout openModel={() => setLoginOpen(true)} />
      <div className="app-content">
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/battle/create" component={NewBattle} exact={true} />
        </Switch>
      </div>
      <Loader show={props.showLoader} />
      <Toaster />
      <AppLogin open={isLoginOpen} closeModal={() => setLoginOpen(false)} />
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  return {
    showLoader: state.UI.showLoader
  };
};

export default connect(mapStateToProps)(AppRouter);
