import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../styles/fd-card.css'

class FDCard extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }} className='fd-card'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Item name</Card.Title>
                    <Card.Text>
                        some short description
                    </Card.Text>
                    <Button variant="primary">Add + </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default FDCard;