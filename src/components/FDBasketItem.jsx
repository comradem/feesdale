import React, {Component, Fragment} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../styles/fd-basket-item.css'
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class FdBasketItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity : 1
        }
    }


    removeThisItem = () => {
        const {dataObject,removeItem} = this.props;
        removeItem(dataObject.productId);
    };

    handleQuantity = (eventKey,event) => {
        const {dataObject,removeItem} = this.props;
        if(eventKey === '0') {
            removeItem(dataObject.productId);
        } else {
            let num = parseInt(eventKey);
            dataObject.quantity = num;
            this.setState({quantity: num});
        }
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
                </Card.Body>
                <Card.Footer>
                    <DropdownButton
                        variant="outline-secondary"
                        title={`${this.state.quantity}`}
                        id="input-group-dropdown-1">
                        <Dropdown.Item href="#" onSelect={this.handleQuantity} eventKey='1'>0(delete)</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" onSelect={this.handleQuantity} eventKey='1'>1</Dropdown.Item>
                        <Dropdown.Item href="#" onSelect={this.handleQuantity} eventKey='2'>2</Dropdown.Item>
                        <Dropdown.Item href="#" onSelect={this.handleQuantity} eventKey='3'>3</Dropdown.Item>
                        <Dropdown.Item href="#" onSelect={this.handleQuantity} eventKey='4'>4</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" onSelect={this.handleQuantity} eventKey='5'>5+</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="secondary" onClick={this.removeThisItem}>Remove</Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default FdBasketItem;