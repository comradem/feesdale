import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ReactFileReader from 'react-file-reader';
import {processDataFromFile} from '../utils/utils'

class ManagerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    handleFiles = async(files) => {
        let reader = new FileReader();
        reader.onload = function (e) {
            // Use reader.result

            let rawData = reader.result;

            let data =  processDataFromFile(reader.result);


        };
        // console.log('FILES******'+files);

        reader.readAsText(files[0]);
    };

    loadFile = () => {
        console.log('should load from file');
        this.setState({
            data: []
        })
    };

    addItem = () => {
        console.log('add item');
    };


    render() {
        return (
            <Container>
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                    <Button onClick={this.loadFile}>Load File</Button>
                </ReactFileReader>
            </Container>
        );
    }
}

export default withRouter(ManagerPage);