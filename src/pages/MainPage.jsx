import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../styles/main.css'


class MainPage extends Component {


    render() {
        return (
            <div className='p-main-search-bar'>
                <div className='main-page-logo'>MAX SUCCESS</div>
                <Form>
                    <Form.Group controlId="formSearch">
                        <Form.Control type="text" placeholder="Search ..."/>
                    </Form.Group>
                    <div className='search-bar-buttons'>
                        <Button variant="secondary" type="button" className='p-main-search-btn'
                                onClick={this.handleSearch}>
                            Search
                        </Button>
                        <Button variant="secondary" type="button" className='p-main-search-btn '>
                            Find for me
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default MainPage;