import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Classes from './Navbar.module.css';

const navbar = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" fixed='top' variant="dark" >
            <Navbar.Brand ><NavLink to='/' exact
                className={Classes.linkStyles}
                activeClassName={Classes.active}
            >NutriMart</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <NavLink to='/fatburner' exact
                            className={Classes.linkStyles}
                            activeClassName={Classes.active}>
                            Fatburners
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link><NavLink to="/Protein" exact className={Classes.linkStyles}
                        activeClassName={Classes.active}>Proteins</NavLink></Nav.Link>
                    {/* <NavDropdown title="Other Supplements" id="collasible-nav-dropdown" className={Classes.dropdown}>
                        <NavDropdown.Item className={Classes.navLink}>
                            <NavLink to='/fatburner' exact
                                className={Classes.linkStyles}
                                activeClassName={Classes.active}>
                                Fat Burners
                        </NavLink></NavDropdown.Item>
                        <NavDropdown.Item className={Classes.navLink}>
                            <NavLink to='/fatburner' exact
                                className={Classes.linkStyles}
                                activeClassName={Classes.active}>
                                Growth Supplements
                        </NavLink></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className={Classes.navLink}>
                            <NavLink to='/fatburner' exact
                                className={Classes.linkStyles}
                                activeClassName={Classes.active}>
                                Separated link
                        </NavLink></NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="#deets"> Accessories</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        My Account
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navbar; 