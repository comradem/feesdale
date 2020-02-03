import React, {Component, Fragment} from 'react';
import FdBasketItem from "../components/FDBasketItem";


class FDBasketPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        if (this.props.basket){
            this.setState({
                data:this.props.basket
            })
        }
    }

    render() {
        let data = this.state.data.map((item, index) => <FdBasketItem key={index} dataObject={item}/>);
        return (
            <Fragment>
                {data}
            </Fragment>
        );
    }
}

export default FDBasketPage;