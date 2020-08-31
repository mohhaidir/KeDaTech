import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from '../assets/img/green.svg'
import { Link as Links, animateScroll as scroll } from "react-scroll";

export default () => {
    
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            {/* <Navbar.Brand className="text-home-navbar" as={Link} to="/">Home</Navbar.Brand> */}
            <Navbar.Brand className="text-home-navbar" as={Link} to="/">
                <img
                    alt=""
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Nav className="list-text">
                    <Nav.Link>
                        <Links
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {300}
                        >About</Links>
                    </Nav.Link>
                    <Nav.Link>
                        <Links
                            activeClass="active"
                            to="pricing"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {300}
                        >Pricing</Links>
                    </Nav.Link>
                    <Nav.Link>
                        <Links
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {300}
                        >Contact</Links>
                    </Nav.Link>
                    <Nav.Link className="login-btn" as={Link} to="/login">
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}