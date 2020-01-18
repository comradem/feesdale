import React, {Fragment} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import MainPage from '../src/pages/MainPage'
import LoginPage from "../src/pages/LoginPage";
import FDNavigation from "../src/components/FDNavigation";
import StorePage from "../src/pages/StorePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import FDBasketPage from "../src/pages/FDBasketPage";





function App() {
    return (
        <Fragment>
            <FDNavigation/>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={MainPage}/>
                <Route exact path='/store' component={StorePage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path='/basket' component={FDBasketPage}/>
            </Switch>
        </Fragment>
    );
}

export default App;
