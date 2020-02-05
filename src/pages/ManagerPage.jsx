import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ReactFileReader from 'react-file-reader';
import {processDataFromFile} from '../utils/utils';
import Parse from 'parse';
import FDObjectModel from "../orm/FDObjectModel";
import {Redirect} from 'react-router'
import FDCard from "../components/FDCard";

class ManagerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    handleFiles = (files) => {
        let reader = new FileReader();
        reader.onload = function (e) {
            let data = processDataFromFile(reader.result);
            // write data to db
            const propNames = Object.getOwnPropertyNames(new FDObjectModel());
            const NewParseObject = Parse.Object.extend('FDObjectModel', null, propNames);
            let dataToSave = data.map((item, index) => {
                const myNewObject = new NewParseObject();
                for (let i = 0; i < propNames.length; i++) {
                    myNewObject.set(propNames[i], item[`${propNames[i]}`]);
                }
                //adding some search words
                if (index % 17 === 0) {
                    myNewObject.set('searchKeywords', [1, 'dress', 'cloth']);
                }
                if (index % 23 === 0) {
                    myNewObject.set('searchKeywords', [1, 'gadget']);
                }
                if (index % 7 === 0) {
                    myNewObject.set('searchKeywords', [1, 'bike', 'test']);
                }
                if (index % 131 === 0) {
                    myNewObject.set('searchKeywords', [1, 'best', 'item']);
                }
                return myNewObject;
            });
            debugger
            Parse.Object.saveAll(dataToSave).then(
                (result) => {
                    if (typeof document !== 'undefined')
                        console.log('ParseObject created', result);
                },
                (error) => {
                    if (typeof document !== 'undefined')
                        console.error('Error while creating ParseObject: ', error);
                }
            );

        };
        reader.readAsText(files[0]);
    };

    render() {
        const {storeData, isAuth, updateData} = this.props;
        if (!isAuth) return <Redirect to="/"/>;
        let data = storeData.map((item, index) => <FDCard key={index} dataObject={item}
                                                          isManager={isAuth} updateData={updateData}/>);
        return (
            <Container>
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                    <Button>Load File</Button>
                </ReactFileReader>
                <br/>
                <br/>
                {data}
            </Container>
        );
    }
}

export default withRouter(ManagerPage);