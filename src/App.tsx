import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./views/main/index";
import { useWebSocket } from "./components/WebSocketService";

function App() {
    const { socket, message } = useWebSocket();
    useEffect(() => {
        console.info("App收到消息:", message);
    }, [message]);

    return (
        <Switch>
            <Route path="/main" render={() => <Main />}></Route>
            <Redirect from="/" to="/main" exact></Redirect>
        </Switch>
    );
}

export default App;
