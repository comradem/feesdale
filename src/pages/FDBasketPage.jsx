import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import FdBasketItem from "../components/FDBasketItem";
import Button from "react-bootstrap/Button";
import { withRouter} from 'react-router'



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

    moveToCheckout = () => {
        this.props.history.push({
            pathname: '/checkout',
            state: {data: this.state.data, updateBasket: this.props.updateBasket}
        });
    };

    render() {
        let data = this.state.data.map((item, index) => <FdBasketItem key={index} dataObject={item}
                                                                      removeItem={this.removeItem}/>);


        if (data.length <= 0) return (<Fragment>your basket is empty</Fragment>);
        return (
            <Container fluid>
                <div>
                    {data}
                </div>
                <div>{
                    data.length > 0 ? <Fragment>
                        <br/>
                        <Button variant='success' block type='button' onClick={this.moveToCheckout}>Checkout</Button>
                    </Fragment> : null
                }
                </div>
            </Container>

        );
    }
}

export default withRouter(FDBasketPage);