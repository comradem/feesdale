import React, {Component, Fragment} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../styles/fd-basket-item.css'

class FdBasketItem extends Component {

    removeThisItem = () => {
        const {dataObject,removeItem} = this.props;
        removeItem(dataObject.productId);
    };


    render() {
        const {dataObject} = this.props;
        if (!dataObject) return (<Fragment/>);
        return (
            <Card>
                <Card.Header>{dataObject.categoryName}</Card.Header>
                <Card.Body>
                    <Card.Img className='item-image' variant='top' src={dataObject.productImage} />
                    <Card.Title>{dataObject.productName}</Card.Title>
                    <Card.Text>
                        Price: {dataObject.originalPrice}$
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    <Button variant="primary" onClick={this.removeThisItem}>Remove</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default FdBasketItem;