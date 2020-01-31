import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import FDCard from '../components/FDCard'
import '../styles/store.css'

class StorePage extends Component {
    render() {
        let {storeData, addItemToBasket} = this.props;
        let data = storeData.map((item, index) => <FDCard key={index} dataObject={item}
                                                          addItemToBasket={addItemToBasket}/>);
        return (
            <Container className='p-store'>
                {data}
            </Container>
        );
    }
}

export default StorePage;