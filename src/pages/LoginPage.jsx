import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {Redirect} from 'react-router';
import '../styles/login.css'

import Parse from 'parse';



class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated : false,
            email : '',
            password : ''
        }
    }

    handleSubmit = () => {
        const {email, password} = this.state;
        const {isAuth} = this.props;
        //Pass the username and password to logIn function
        Parse.User.logIn(email,password).then((user) => {
            // Do stuff after successful login
            // debugger
            isAuth(true);
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
            return <Redirect to={{
                pathname : '/manager',
                state : this.props.storeData
            }}
            />
            // this.props.history.push('/manager',this.props.storeData);
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