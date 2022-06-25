import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { CategoryHandler } from '../../services/AdminAPI';
import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

const STATE = [];

const CategoryItem = ({id, title}) => {
    const remove = false;
    
    const Update = useCallback(() => {
        const div = document.createElement('div');
        div.id = 'modal';
        document.getElementById('root').appendChild(div);
        ReactDOM.render(<ModalForm id={id} title={title} />, document.getElementById('modal'))
    });

    const Delete = useCallback( async () => {
        await CategoryHandler().delete(id);
    });

    useEffect(() => {
        if (remove) {
            for (const category in STATE) if (category.id == id) STATE.push(category);
        }
    });

    return (
        <tr>
            <td>{ id }</td>
            <td>{ title }</td>
            <td>33</td>
            <td>
                <Button variant="primary" as="input" type="button" value="Update" onClick={Update} />
                <Button variant="danger" as="input" type="button" value="Delete" onClick={Delete} />
            </td>
        </tr>
    )
}

const CategoryList = ({categories}) => {
    if (Array.isArray(categories)) {
        const listOfCategories = categories.map(category => <CategoryItem key={category.id} id={category.id} title={category.title} />);
        return listOfCategories;
    }
    else {
        return (
            <td>
                <Spinner animation="grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </td>
        )
    }
}

const AdminCategories = () => {
    const [state, setState] = useState(STATE);
    const get_categories = async () => {
        const data = await CategoryHandler().get();
        const result = await data.json();
        setState(result);
    }

    useEffect(() => {
        get_categories();
    })

    return (
        <Layout content={
            <>
                <h1>Categories</h1>
                <Table striped bordered hover className="mt-5">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Items</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CategoryList categories={state} />
                    </tbody>
                </Table>
                <div id='modal'></div>
            </>
        } />
    )
}

const ModalForm = ({id, title}) => {
    const initialState = {id: '', title: ''};
    const [state, setState] = useState(initialState);
    const [show, setShow] = useState(true);
  
    const handleClose = () => {
        document.getElementById('modal').remove();
        setShow(false);
    }

    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});

    const handleSubmit = event => {
        event.preventDefault();
    }

    useEffect(() => setState({id, title}), []);
  
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Category { id }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="title" placeholder="Category Title"
                        onChange={handleInputChange} value={state.title} />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>{' '}
                        <Button variant="primary" type="submit">Save Changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}


export default AdminCategories;