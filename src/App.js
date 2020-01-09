import React, {Fragment} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import MainPage from '../src/pages/MainPage'
import LoginPage from "../src/pages/LoginPage";
function App() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/login" component={LoginPage}/>
            </Switch>
        </Fragment>
    );
}

export default App;