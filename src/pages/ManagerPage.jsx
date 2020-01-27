import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class ManagerPage extends Component {

    loadFile = () => {
        console.log('should load from file');
    };

    addItem = () => {
        console.log('add item');
    };


    render() {
        return (
            <Container>
                <br/>
                <Button onClick={this.addItem}>Add Item</Button>
                <Button onClick={this.loadFile}>Load File</Button>
            </Container>
        );
    }
}

export default withRouter(ManagerPage);