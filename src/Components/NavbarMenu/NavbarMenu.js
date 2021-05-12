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
                            <Nav.Link href="/" style={{fontFamily:'raleway',fontWeight: 'bold'}}>HOME</Nav.Link>
                            <Nav.Link href="/projects" style={{fontFamily:'raleway',fontWeight: 'bold'}}>PROJECTS</Nav.Link>
                            <Nav.Link href="/blogs" style={{fontFamily:'raleway',fontWeight: 'bold'}}>BLOGS</Nav.Link>
                            <Nav.Link href="/resume" style={{fontFamily:'raleway',fontWeight: 'bold'}}>RESUME</Nav.Link>
                            <Nav.Link href="/contactMe" style={{fontFamily:'raleway',fontWeight: 'bold'}}>CONTACT ME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>

    );
};

export default NavbarMenu;