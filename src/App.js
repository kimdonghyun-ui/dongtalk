import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Chat from './containers/Chat'

function App() {


  let authenticated = false;

  useEffect(() => {
    console.log('[표시]App.js')
  }, []);

  return (
    <HashRouter>
      <Switch>
        <PrivateRoute
          path="/chat"
          authenticated={authenticated}
          component={Chat}
        />
        <PublicRoute
          path="/signup"
          authenticated={authenticated}
          component={SignUp}
        />
        <PublicRoute
          path={["/", "/login"]}
          authenticated={authenticated}
          component={Login}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
