import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const NavComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand >Raquel Acevedo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/about" className="btn btn-success">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/portfolio" className="btn btn-success">Portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/resume" className="btn btn-success">Resume</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="btn btn-success">Contact</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-2" href="https://github.com/raquelacevedo" target="_blank"><FontAwesomeIcon icon={faGithub} /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-2" href="https://www.linkedin.com/in/raquel-acevedo-a27a4b9b//" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );


}

export default NavComponent;