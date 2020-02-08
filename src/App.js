import React, {Fragment, Component} from 'react';
import {
    Switch,
    Route
} from "react-router";

import MainPage from '../src/pages/MainPage'
import LoginPage from "../src/pages/LoginPage";
import AboutPage from "../src/pages/AboutPage";
import FDNavigation from "../src/components/FDNavigation";
import StorePage from "../src/pages/StorePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import FDBasketPage from "../src/pages/FDBasketPage";
import ManagerPage from "../src/pages/ManagerPage";
import Parse from 'parse';
import FDObjectModel from '../src/orm/FDObjectModel'
import EmptyPage from "../src/pages/EmptyPage";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            storeData: [],
            basket: [],
            isAuthenticated: false
        }
    }

    async componentDidMount(): void {
        let objProps = Object.getOwnPropertyNames(new FDObjectModel());
        const NewParseObject = Parse.Object.extend('FDObjectModel', null, objProps);
        const query = new Parse.Query(NewParseObject);
        query.limit = 1000;
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
            return new FDObjectModel(item.attributes)
        });
        this.setState({
            storeData: ans
        });

    }

    addItem = (event, productObject) => {
        this.setState({
            basket: this.state.basket.concat(productObject)
        });
    };

    isAuthenticated = (isAuth) => {
        this.setState({
            isAuthenticated: isAuth
        })
    };

    updateBasket = (newData) => {
        this.setState({basket: newData})
    };

    updateItem = (e, item) => {
        const {storeData} = this.state;
        debugger;
        switch (e.target.name) {
            case 'delete':
                console.log('removing item from the store' + item);
                storeData.splice(storeData.indexOf(item), 1);
                break;
            case 'edit':
                console.log('editing item' + item);
                break;
            default:
                debugger;
                break;
        }
        this.setState({storeData});
    };

    logout = () => {
        this.setState({isAuthenticated: false});
    };

    render() {
        const {storeData, basket} = this.state;
        const count = this.state.basket.length;
        return (
            <Fragment>
                <FDNavigation numOfSelectedItems={count} basket={this.state.basket} isAuth={this.state.isAuthenticated}
                              handleLogout={this.logout}/>
                <Switch>
                    <Route exact path={`/`}
                           render={(props) => <MainPage {...props} searchData={storeData}/>}/>
                    <Route exact path={`/store`} render={(props) => <StorePage {...props} storeData={storeData}
                                                                               addItemToBasket={this.addItem}
                                                                               basket={basket}/>}/>
                    <Route exact path={`/store/search?:searchText`}
                           render={(props) => <StorePage {...props} storeData={storeData}
                                                         addItemToBasket={this.addItem}
                                                         basket={basket}/>}/>
                    <Route exact path="/login"
                           render={(props) => <LoginPage {...props} isAuth={this.isAuthenticated}/>}
                           storeData={storeData}/>
                    <Route exact path='/basket' render={(props) => <FDBasketPage {...props}
                                                                                 basket={basket}
                                                                                 updateBasket={this.updateBasket}
                    />}/>
                    <Route exact path='/manager'
                           render={(props) => <ManagerPage {...props} storeData={storeData}
                                                           isAuth={this.state.isAuthenticated}
                                                           updateData={this.updateItem}/>}/>
                    <Route exact path='/about' component={AboutPage}/>
                    <Route exact path='/empty' render={ props => <EmptyPage {...props}/>}/>
                </Switch>
                {/*<FdFooter/>*/}
            </Fragment>
        );
    }
}

export default App;
