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
            storeData: [],
            basket: []
        }
    }

    async componentDidMount(): void {
        let objProps = Object.getOwnPropertyNames(new FDObjectModel());
        const NewParseObject = Parse.Object.extend('FDObjectModel', null, objProps);
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
        let ans = res.map(item => {
            console.log('item: '+item.attributes);
            return new FDObjectModel(item.attributes)});
        console.log(res);
        this.setState({
            storeData: ans
        });

    }

    addItem = (event, productObject) => {
        this.setState({
            basket: this.state.basket.concat(productObject)
        });
    };

    render() {
        const {storeData} = this.state;
        const count = this.state.basket.length;
        return (
            <Fragment>
                <FDNavigation numOfSelectedItems={count} basket={this.state.basket}/>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} render={(props) => <MainPage {...props} searchData={storeData}/>}/>
                    <Route exact path='/store' render={(props) => <StorePage {...props} storeData={storeData}
                                                                             addItemToBasket={this.addItem}
                                                                             basket={this.state.basket}/>}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path='/basket' render={(props) => <FDBasketPage {...props}
                                                                                 basket={this.state.basket}/>}/>
                    <Route exact path='/manager'
                           render={(props) => <ManagerPage {...props} storeData={storeData}/>}/>
                </Switch>
                {/*<FdFooter/>*/}
            </Fragment>
        );
    }
}

export default App;
