import React, { Fragment} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../styles/main.css'


function MainPage() {
        return (
            <div className='search-bar'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Search ..." />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='search-btn'>
                        Search
                    </Button>
                </Form>
            </div>
        );
}

export default MainPage;