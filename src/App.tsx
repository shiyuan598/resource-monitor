import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./views/main/index";
import getWebSocekt, {socketIo} from "./api/socket";

function App() {
    getWebSocekt().onmessage = (event) => {
        const message = event.data;
        console.log("App中收到消息:", message);
    };
    return (
        <Switch>
            <Route path="/main" render={() => <Main />}></Route>
            <Redirect from="/" to="/main" exact></Redirect>
        </Switch>
    );
}

export default App;
