import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
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
        const {isAuth, handleLogout} = this.props;

        return (
            <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to={
                    {
                        pathname: '/'
                    }
                }>M&S</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to={
                            {
                                pathname: '/store'
                            }
                        }>Store</Nav.Link>
                        {/*<Nav.Link href="/search">Search</Nav.Link>*/}
                        <Nav.Link as={Link} to={
                            {
                                pathname: '/about'
                            }
                        }>About</Nav.Link>
                    </Nav>
                    <input type="text" placeholder='search' className='search-bar-input'/>
                    <Nav>
                        <Nav.Link as={Link} to={
                            {
                                pathname: '/basket'
                            }
                        }>
                            <Badge className={`badge badge-pill badge-danger ${hide}`}
                                   variant="danger">{this.props.numOfSelectedItems}</Badge>
                            <span className='img_bg'><img src={imgBasket} alt="basket"/></span>
                        </Nav.Link>
                        <Nav.Link as={Link} to={isAuth ? {pathname: '/manager'} : {pathname: '/login'}} onClick={() =>
                            isAuth ? handleLogout() : null
                        }>
                            {isAuth ? 'Logout' : 'Account'}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(FDNavigation);