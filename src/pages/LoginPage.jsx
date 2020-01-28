import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import '../styles/login.css'

import Parse from 'parse';

// import FacebookLogin from 'react-facebook-login';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated : false
        }
    }

    handleSubmit = () => {
        const {email, password} = this.state;
        //Pass the username and password to logIn function
        Parse.User.logIn(email,password).then((user) => {
            // Do stuff after successful login
            this.setState({
                isAuthenticated : true
            });
        }).catch(error => {
            // console.error('Error while logging in user', error);
        });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    render(){
        if (this.state.isAuthenticated === true) {
            this.props.history.push('/manager');
        }
        const {email, password} = this.state;
        return (
            <Container>
                <Form className='p-login'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" value={email} onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="light" type="button" onClick={this.handleSubmit}>
                        Login
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default LoginPage;