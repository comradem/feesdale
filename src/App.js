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
                <Route exact path={process.env.PUBLIC_URL + '/'} component={MainPage}/>
                console.log(process.env.PUBLIC_URL);
                <Route exact path="/login" component={LoginPage}/>
            </Switch>
        </Fragment>
    );
}

export default App;
