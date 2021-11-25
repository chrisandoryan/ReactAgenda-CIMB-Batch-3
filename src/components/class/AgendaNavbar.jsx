import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";

class AgendaNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Agenda v3</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/demoReact">Demo React</Nav.Link>
                        <Nav.Link as={Link} to="/agendaClass">Agenda (Class)</Nav.Link>
                        <Nav.Link as={Link} to="/agendaFunction">Agenda (Function)</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default AgendaNavbar;