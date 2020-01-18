import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../styles/navigation.css'
import img from '../images/shopping-cart24x24.png'

class FDNavigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">M&S</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/store">Store</Nav.Link>
                        {/*<Nav.Link href="/search">Search</Nav.Link>*/}
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="/basket">
                            <span className='img_bg'><img src={img} alt="basket"/></span>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default FDNavigation;