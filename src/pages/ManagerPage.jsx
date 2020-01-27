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


    handleFiles = (files) => {
        var reader = new FileReader();
        reader.onload = function (e) {
            // Use reader.result
            // let rawData = reader.result;
            let data =  processDataFromFile(reader.result);
        };
        reader.readAsText(files[0]);

        this.setState({
            data : reader.result
        });
        console.log('endede');
    };

    loadFile = () => {
        // this.setState({
        //     data: []
        // })
    };

    addItem = () => {
        console.log('add item');
    };


    render() {
        const {data} = this.state;
        console.log('the state is: '+data);
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