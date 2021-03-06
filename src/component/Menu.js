import React                                 from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink}                             from "react-router-dom";

const MenuComponent = () => {
    return (<Navbar bg="info" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <NavLink className={`nav-link rounded`} to="button"> Button </NavLink>
                    <NavLink className={`nav-link rounded`} to="table"> Table </NavLink>
                    <NavLink className={`nav-link rounded`} to="style"> Style </NavLink>
                    <NavLink className={`nav-link rounded`} to="toggle"> Toggle </NavLink>
                    <NavLink className={`nav-link rounded`} to="form"> Form </NavLink>
                    <NavLink className={`nav-link rounded`} to="formValidation"> Form Validation </NavLink>
                    <NavLink className={`nav-link rounded`} to="useEffect"> Use Effect </NavLink>
                    <NavLink className={`nav-link rounded`} to="todo"> Todo List </NavLink>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
};

export default MenuComponent;
