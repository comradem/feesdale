import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import FDCard from '../components/FDCard'

class StorePage extends Component {
    render() {
        return (
            <Container>
                <FDCard/>
                <FDCard/>
                <FDCard/>
                <FDCard/>
                <FDCard/>
                <FDCard/>
                <FDCard/>
            </Container>
        );
    }
}

export default StorePage;