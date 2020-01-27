import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import '../styles/login.css'

import Parse from 'parse'

// import FacebookLogin from 'react-facebook-login';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated : false,
            compareTo : 'aa'  //temporary -- should authenticate against server
        }
    }

    handleSubmit = () => {
        const {email, password} = this.state;
        if(`${email}${password}` === this.state.compareTo) {

            this.setState({
                isAuthenticated : true
            })
        }



        // const user = new Parse.User();
        // user.set('username', email);
        // user.set('email', email);
        // user.set('password', password);
        //
        // user.signUp().then((user) => {
        //     if (typeof document !== 'undefined') document.write(`User signed up: ${JSON.stringify(user)}`);
        //     console.log('User signed up', user);
        // }).catch(error => {
        //     if (typeof document !== 'undefined') document.write(`Error while signing up user: ${JSON.stringify(error)}`);
        //     console.error('Error while signing up user', error);
        // });


        //Pass the username and password to logIn function
        debugger;
        Parse.User.logIn(email,password).then((user) => {
            debugger;
            console.log('user is :' + user);
            // Do stuff after successful login
            if (typeof document !== 'undefined') document.write(`Logged in user: ${JSON.stringify(user)}`);
            console.log('Logged in user', user);
        }).catch(error => {
            debugger;
            if (typeof document !== 'undefined') {
                console.error(`Error while logging in user: ${JSON.stringify(error)}`);
            }
            console.error('Error while logging in user', error);
        });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    render(){
        if (this.state.isAuthenticated === true) {
            console.log('i am authenticated, redirect me to next page');
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