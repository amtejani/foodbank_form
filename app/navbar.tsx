'use client';

import { Nav, Navbar, Container } from 'react-bootstrap';
import Link from 'next/link';

export default function NavbarComponent() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/">Foodbank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav>
            </Navbar.Collapse>     
        </Container>
    </Navbar>
    );
}