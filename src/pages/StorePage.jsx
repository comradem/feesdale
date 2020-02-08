import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {Redirect} from 'react-router'
import FDCard from '../components/FDCard'
import '../styles/store.css'

class StorePage extends Component {

    render() {
        let {storeData, addItemToBasket} = this.props;
        let searchText = this.props.match.params.searchText;

        //filter out unnecessary items
        let processed = searchText ? storeData.filter(item => item.searchKeywords.join(' ').includes(searchText)): storeData;

        if (processed.length === 0) {
             return <Redirect to={{
                pathname: '/empty'
            }}/>
        }


        let data = processed.map((item, index) => <FDCard key={index} dataObject={item}
                                                          addItemToBasket={addItemToBasket}/>);
        return (
            <Container className='p-store'>
                {data}
            </Container>
        );
    }
}

export default StorePage;