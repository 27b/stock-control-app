import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from '../../components/Sidebar/index.js'
import Navbar from '../../components/Navbar/index.js';

const AdminLayout = ({content}) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="p-0">
                    <Sidebar />
                </Col>
                <Col xs={10}>
                    <div className="vh-100 overflow-scroll">
                        <Navbar />
                        <div className="container">
                            { content }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminLayout;