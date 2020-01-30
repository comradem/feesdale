import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../styles/navigation.css'
import imgBasket from '../images/shopping-cart24x24.png'
import Badge from "react-bootstrap/Badge";

class FDNavigation extends Component {


    render() {
        let hide = 'hidden';
        if (this.props.numOfSelectedItems !== 0) {
            hide = ''
        }
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
                    <input type="text" placeholder='search' className='search-bar-input'/>
                    <Nav>
                        <Nav.Link eventKey={2} href="/basket">
                            <Badge className={`badge badge-pill badge-danger ${hide}`} variant="danger">{this.props.numOfSelectedItems}</Badge>
                            <span className='img_bg'><img src={imgBasket} alt="basket"/></span>
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