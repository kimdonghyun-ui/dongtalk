import React, { useEffect } from "react";
import { HashRouter, Switch } from "react-router-dom";
import { fireauth } from "./services/firebase";

import { connect } from "react-redux";
import { rx_authenticated } from "./modules/chats";
import { logout, connected } from "./helpers/databox";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Chat from "./containers/Chat";

function App({ rx_authenticated, authenticated }) {
  useEffect(() => {
    console.log("[표시]App.js");
    fireauth.onAuthStateChanged((user) => {
      if (user) {
        //로그인상태---
        console.log("App/로그인", user);
        //#########################
        connected(true);
        rx_authenticated(true); //현재 로그인 여부 파악을 위한 값
        //#########################
      } else {
        //로그아웃상태---
        console.log("App/로그아웃", user);
        //#########################
        connected(false);
        rx_authenticated(false); //현재 로그인 여부 파악을 위한 값
        //#########################
      }
    });
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

const mapStateToProps = (state) => ({
  authenticated: state.chats.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  rx_authenticated: (val) => {
    dispatch(rx_authenticated(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
