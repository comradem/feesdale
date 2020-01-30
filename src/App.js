import React, {Fragment, Component} from 'react';
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
import ManagerPage from "../src/pages/ManagerPage";
import Parse from 'parse';
import FDObjectModel from '../src/orm/FDObjectModel'



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            storeData : [],
            basket : []
        }
    }


    async componentDidMount(): void {
        let objProps = Object.getOwnPropertyNames(new FDObjectModel());
        const NewParseObject = Parse.Object.extend('FDObjectModel',null,objProps);
        const query = new Parse.Query(NewParseObject);
        let res = await query.find().then((results) => {
            if (typeof document !== 'undefined') {
                return results;
            }
        }, (error) => {
            if (typeof document !== 'undefined') {
                console.error('Error while fetching FDObjectModel', error);
                return [];
            }
        });
        let ans = res.map( item => new FDObjectModel(item.attributes));
        this.setState({
            storeData : ans
        });
    }
    addItem =(event,productId) => {
        console.log('clicked on: '+productId);
    };


    render() {
        return (
            <Fragment>
                <FDNavigation/>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={MainPage}/>
                    <Route exact path='/store' render={(props) => <StorePage {...props} storeData={this.state.storeData} addItemToBasket={this.addItem}/>}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path='/basket' component={FDBasketPage}/>
                    <Route exact path='/manager' render={(props) => <ManagerPage {...props} storeData={this.state.storeData}/>}/>
                </Switch>
                {/*<FdFooter/>*/}
            </Fragment>
        );
    }
}

export default App;
