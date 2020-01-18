import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import '../styles/login.css'

import FacebookLogin from 'react-facebook-login';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    handleSubmit = () => {
        console.log('submitted');
    };

    render(){
        return (
            <Container>
                <Form className='p-login' onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="light" type="submit">
                        Login
                    </Button>
                    {/*<FacebookLogin*/}
                    {/*    appId="1088597931155576"*/}
                    {/*    autoLoad={true}*/}
                    {/*    fields="name,email,picture"*/}
                    {/*    onClick={() => {*/}
                    {/*        console.log('clicked');*/}
                    {/*    }}*/}
                    {/*    callback={() => {*/}
                    {/*        console.log('fbCallback');*/}
                    {/*    }} />*/}
                </Form>
            </Container>
        );
    }
}

export default LoginPage;