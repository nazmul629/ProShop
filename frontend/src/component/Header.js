import React from 'react'
import {Container, Navbar,Nav} from 'react-bootstrap'
const Header = () => {
    return (
        <header>
        <Container>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart"><i className="fas-fa-shopping-cart"></i> Cart</Nav.Link>
                        <Nav.Link href="/login"><i className="fas fa-user"></i> Sin In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </header>
    )
}

export default Header
