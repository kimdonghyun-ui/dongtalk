import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Chat from './containers/Chat'

function App() {


  useEffect(() => {
    console.log('[표시]App.js')
  }, []);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Chat}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
