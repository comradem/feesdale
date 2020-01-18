import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../styles/main.css'


function MainPage() {
        return (
            <div className='search-bar'>
                <div className='main-page-logo'>MAX SUCCESS</div>
                <Form>
                    <Form.Group controlId="formSearch">
                        <Form.Control type="text" placeholder="Search ..." />
                    </Form.Group>
                    <div className='search-bar-buttons'>
                        <Button variant="secondary" type="submit" className='search-btn'>
                            Search
                        </Button>
                        <Button variant="secondary" type="button" className='search-btn '>
                            Find for me
                        </Button>
                    </div>
                </Form>
            </div>
        );
}

export default MainPage;