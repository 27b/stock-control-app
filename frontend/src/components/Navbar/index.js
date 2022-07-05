import React from 'react';
import { Navbar } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown'

const NavbarComponent = () => {
    const username = localStorage.getItem('username') + ' ';

    return (
        <Navbar className="bg-white mb-4 border-bottom">
            <div className="container">
                <Navbar.Brand>Inventory Management</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Dropdown>
                        <Dropdown.Toggle className="text-capitalize" variant="outline-success" id="dropdown-basic">
                            { username }
                        </Dropdown.Toggle>
                        <Dropdown.Menu align={{ lg: 'end' }}>
                            <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarComponent;