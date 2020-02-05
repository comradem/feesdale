import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import FdBasketItem from "../components/FDBasketItem";

import {PayPalButton} from "react-paypal-button-v2";

class FDBasketPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        if (this.props.basket) {
            this.setState({
                data: this.props.basket
            })
        }
    }

    removeItem = (itemId) => {
        let newBasket = this.state.data.filter(item => item.productId !== itemId);
        this.setState({data: newBasket});
        const {updateBasket} = this.props;
        updateBasket(newBasket);
    };

    render() {
        let data = this.state.data.map((item, index) => <FdBasketItem key={index} dataObject={item}
                                                                      removeItem={this.removeItem}/>);

        if (data.length <= 0 ) return (<Fragment>your basket is empty</Fragment>);
        return (
            <Container fluid>
                <div>
                    {data}
                </div>
                <div>
                    <PayPalButton
                        amount="0.01"
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);

                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                    orderID: data.orderID
                                })
                            });
                        }}
                    />
                </div>
            </Container>

        );
    }
}

export default FDBasketPage;