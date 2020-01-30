import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ReactFileReader from 'react-file-reader';
import {processDataFromFile} from '../utils/utils';
import Parse from 'parse';
import FDObjectModel from "../orm/FDObjectModel";

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
            const props = Object.getOwnPropertyNames(new FDObjectModel());
            const NewParseObject = Parse.Object.extend('FDObjectModel', null, props);

            let dataToSave = data.map(item => {
                const myNewObject = new NewParseObject();
                for (let i = 0; i < props.length; i++) {
                    myNewObject.set(props[i], item[`${props[i]}`]);
                }
                return myNewObject;
            });
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
        const {data} = this.state;
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