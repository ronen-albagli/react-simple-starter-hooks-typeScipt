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

export const history = createHistory();

const AppRouter: React.FC = () => {
  return (
    <Router history={history}>
      <AppLayout />
      <div className="app-content">
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/battle/create" component={NewBattle} exact={true} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
