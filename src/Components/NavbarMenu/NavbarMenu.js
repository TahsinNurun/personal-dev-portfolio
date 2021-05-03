import React from 'react';
import logo from '../../Images/logo.png';
import '../../App.css'
import { Nav, Navbar } from 'react-bootstrap';


const NavbarMenu = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <div className="container">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="100rem"
                            height="50rem"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                           
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/projects">PROJECTS</Nav.Link>
                            <Nav.Link href="/blogs">BLOGS</Nav.Link>
                            <Nav.Link href="/resume">RESUME</Nav.Link>
                            <Nav.Link href="/contactMe">CONTACT ME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>

    );
};

export default NavbarMenu;