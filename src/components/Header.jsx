// @flow
import * as React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {FaHome, FaShoppingCart, FaUser} from "react-icons/fa";

export function Header() {
    return (
        <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
                        <Nav.Link href="/login"><FaUser /> Sign In</Nav.Link>
                        <Nav.Link href="/home"><FaHome/>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    );
};