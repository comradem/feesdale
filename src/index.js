import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import Parse from "parse";

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
    'E0g79W7vvsSB3qTiIaxb6YVxxmOX9CFdPHC4aTiT', // This is your Application ID
    'WpArLflf0Mwc3P8FESzB0d4tlcN8aGw05h9olhYa' // This is your Javascript key
);
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
