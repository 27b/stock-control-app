import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Nav className="d-none d-md-block bg-dark vh-100 w-100" activeKey="/home">
            <h1 className="text-white text-center pt-5 pb-4">IM</h1>
            <Container fluid>
                <Nav.Item className="pt-4"><Link className="text-white" to="/admin">Dashboard</Link></Nav.Item>
                <Nav.Item className="pt-4"><Link className="text-white" to="/admin/category">Categories</Link></Nav.Item>
                <Nav.Item className="pt-4"><Link className="text-white" to="/admin/item">Items</Link></Nav.Item>
                <Nav.Item className="pt-4"><Link className="text-white" to="/admin/transaction">Transactions</Link></Nav.Item>
                <Nav.Item className="pt-4"><Link className="text-white" to="/admin/user">Users</Link></Nav.Item>
            </Container>
        </Nav>
    )
}

export default Sidebar;