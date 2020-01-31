import React, {Component, Fragment} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../styles/fd-basket-item.css'

class FdBasketItem extends Component {
    render() {
        const {dataObject} = this.props;
        if (!dataObject) return (<Fragment/>);
        return (

            <Card>
                <Card.Header>{dataObject.categoryName}</Card.Header>
                <Card.Body>
                    <Card.Img className='item-image' variant='top' src={dataObject.productImage} />
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default FdBasketItem;