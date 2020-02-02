import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../styles/fd-card.css'

class FDCard extends Component {
    render() {
        const {productImage,productName,searchKeywords, originalPrice} = this.props.dataObject;
        const {addItemToBasket} = this.props;
        return (
            <Card style={{ width: '18rem' }} className='fd-card'>
                <Card.Img variant="top" src={productImage} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                        {originalPrice}$
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={(ev) => {
                        this.props.dataObject.selected = true;
                        addItemToBasket(ev, this.props.dataObject);
                    }
                    }>Add + </Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default FDCard;