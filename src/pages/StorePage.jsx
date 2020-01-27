import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import FDCard from '../components/FDCard'
import '../styles/store.css'
import FDObjectModel from "../orm/FDObjectModel";

class StorePage extends Component {
    render() {

        let arr = [];
        for (let i = 0; i < 40; i++) {
            arr.push(<FDCard key={i} dataObject={new FDObjectModel()}/>)
        }

        return (
            <Container className='p-store'>
                {arr}
            </Container>
        );
    }
}

export default StorePage;