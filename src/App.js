import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { HashRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { rx_authenticated } from "./modules/chats";
import { logout } from "./helpers/databox";
import { CM_login_state } from "./helpers/common";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Chat from "./containers/Chat";

function App({ rx_authenticated, authenticated }) {
  useEffect(() => {
    console.log("[표시]App.js");
    CM_login_state(rx_authenticated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {authenticated &&
        <button
          onClick={() => {
            // connectCheck(false);
            logout();
          }}
        >
          로그아웃
        </button>
      }
    </HashRouter>
  );
}


App.propTypes = {
  rx_authenticated: PropTypes.func,
  authenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authenticated: state.chats.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  rx_authenticated: (val) => {
    dispatch(rx_authenticated(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
