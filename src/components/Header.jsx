// @flow
import * as React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {FaHome, FaShoppingCart, FaUser} from "react-icons/fa";
import {LinkContainer} from "react-router-bootstrap";

export function Header() {
    return (
        <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to={"/"}>
                    <Navbar.Brand>ProShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to={"/cart"}>
                            <Nav.Link><FaShoppingCart /> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/login"}>
                            <Nav.Link><FaUser /> Sign In</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/home"}>
                            <Nav.Link><FaHome/>Home</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    );
};