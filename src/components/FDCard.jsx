import React, {Component,Fragment} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import '../styles/fd-card.css'

class FDCard extends Component {
    render() {
        const {productImage, productName, searchKeywords, originalPrice} = this.props.dataObject;
        const {addItemToBasket, isManager, dataObject, updateData} = this.props;
        return (
            <Card style={{width: '18rem'}} className='fd-card'>
                <Card.Img variant="top" src={productImage}/>
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
                    {isManager ?
                        <Fragment>
                            <Button className='edit-btn' name='edit' variant='danger'
                                    onClick={(e) => updateData(e, dataObject)}>Edit</Button>
                            <Button className='remove-btn' name='delete' variant='danger'
                                    onClick={(e) => updateData(e, dataObject)}>Delete</Button>
                        </Fragment>
                        : null}
                </Card.Footer>
            </Card>
        );
    }
}

export default FDCard;