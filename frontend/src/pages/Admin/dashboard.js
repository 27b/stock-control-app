import React from 'react';
import Layout from './_layout';
import { Row, Col } from "react-bootstrap";

const DashboardView = () => {
    return (
        <Layout content={
            <>
                <h1 className="mb-6">Dashboard</h1>
                <br />
                <div className="mt-6">
                    <Row>
                        <Col className="rounded m-1 text-center p-3 bg-success text-white">
                            <h3 className="h-4">$16894</h3>
                            <p>Gained Today</p>
                        </Col>
                        <Col className="rounded m-1 text-center p-3 bg-primary text-white">
                            <h3 className="h-4">8</h3>
                            <p>Transactions Today</p>
                        </Col>
                        <Col className="rounded m-1 text-center p-3 text-white bg-dark">
                            <p>
                                Categories: 3<br />
                                Items: 21 <br/>
                                Users: 3
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="rounded m-1 text-center text-success">
                            <h3 className="h-4">$16894</h3>
                            <p>Gained Today</p>
                        </Col>
                        <Col className="rounded m-1 text-center text-success">
                            <h3 className="h-4">$53566</h3>
                            <p>Gained this Week</p>
                        </Col>
                        <Col className="rounded m-1 text-center text-success">
                            <h3 className="h-4">$218746</h3>
                            <p>Gained this Month</p>
                        </Col>
                        <Col className="rounded m-1 text-center text-success">
                            <h3 className="h-4">$512994</h3>
                            <p>Gained in the last 3 months</p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="rounded m-1 text-center text-info">
                            <h3 className="h-4">8</h3>
                            <p>Transactions Today</p>
                        </Col>
                        <Col className="rounded m-1 text-center text-info">
                            <h3 className="h-4">32</h3>
                            <p>Transactions this Week</p>
                        </Col>
                        <Col className="rounded m-1 text-center text-info">
                            <h3 className="h-4">128</h3>
                            <p>Transactions this Month</p>
                        </Col>
                        <Col className="rounded m-1 text-center text-info">
                            <h3 className="h-4">512</h3>
                            <p>Transactions in the last 3 months</p>
                        </Col>
                    </Row>

                </div>
            </>
        } />
    )
}

export default DashboardView;