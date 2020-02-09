import React, {useState, Fragment} from 'react';
import {withRouter} from 'react-router'
import {PayPalButton} from "react-paypal-button-v2";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function CheckOutPage(props) {
    // const [updateBkt, setUpdateBkt] = useState(props.location.state);
    // const [data, setData] = useState(props.location.state.data);

    const {data,updateBasket} = props.location.state;
    function handleSubmit(){
        console.log('called submit');
        updateBasket([]);

    }
    debugger
    if (data == null) return <Fragment>nothing in the basket</Fragment>;

    let sum = data.reduce((sum,next) =>  sum + parseFloat(next.originalPrice), 0);


    return (
        <Container>
            <br/>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
                <div>
                    Total sum is: {sum}$
                </div>
                <br/>
                <br/>
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
                <Button variant="danger" onClick={handleSubmit} block>Warning!!! Clicking here will clear the basket and take you to main page</Button>
            </Form>
        </Container>
    );
}

export default withRouter(CheckOutPage);