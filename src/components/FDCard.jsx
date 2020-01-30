import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../styles/fd-card.css'

class FDCard extends Component {
    render() {
        const {productImage,productName,productId} = this.props.dataObject;
        const {addItemToBasket} = this.props;
        // debugger;
        return (
            <Card style={{ width: '18rem' }} className='fd-card'>
                <Card.Img variant="top" src={productImage} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                        {productName}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={(ev) => addItemToBasket(ev, productId)}>Add + </Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default FDCard;