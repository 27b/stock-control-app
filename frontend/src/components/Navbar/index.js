import { Navbar } from "react-bootstrap";

const NavbarComponent = () => {
    const username = localStorage.getItem('username');

    return (
        <Navbar className="bg-white mb-4 container">
            <Navbar.Brand href="#home">Inventory Management</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">{ username }</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;