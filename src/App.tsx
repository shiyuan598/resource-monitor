import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./views/main/index";

function App() {
    return (
        <Switch>
            <Route path="/main" render={() => <Main />}></Route>
            <Redirect from="/" to="/main" exact></Redirect>
        </Switch>
    );
}

export default App;
