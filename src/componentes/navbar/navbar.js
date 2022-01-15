import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {

    return(
        <Navbar className="menu bg-primary ">
            <Container>
                <Navbar.Brand href="/"></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="sombra" href="/acerca">Acerca de mi</Nav.Link>
                    <Nav.Link className="sombra"href="/conocimientos">Conocimientos</Nav.Link>
                    <Nav.Link className="sombra"href="/antecedentes">Antecedentes</Nav.Link>
                    <Nav.Link className="sombra"href="/curriculum">CV</Nav.Link>
                    <Nav.Link className="sombra"href="/contacto">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;