import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from './_layout';
import { TransactionHandler } from '../../services/AdminAPI';
import { AdminPanelHeader } from '../../components/Header';


const TransactionHeader = () => <AdminPanelHeader title="Transactions" link="/admin/category/add" button="New Category" />;

const TransactionItem = ({data, removeHandler}) => {
    const navigate = useNavigate();

    const Update = () => { navigate('./' + data.id) }

    return (
        <tr>
            <td>{ data.id }</td>
            <td>1</td>
            <td>307.50</td>
            <td>
                <Button variant="primary" as="input" type="button" value="Update" onClick={Update} />{' '}
                <Button variant="danger" as="input" type="button" value="Delete" onClick={() => removeHandler(data.id)} />
            </td>
        </tr>
    )
}

const TransactionList = () => {
    const [state, setState] = useState([]);

    const getTransactionData = useCallback(() => {
        if (localStorage.getItem('CategoryList'))
            setState(JSON.parse(localStorage.getItem('CategoryList')))
        TransactionHandler.get()
            .then(response => response.json())
            .then(result => {
                setState(result.results);
                localStorage.setItem('CategoryList', JSON.stringify(result.results));
            })
    }, []);

    useEffect(() => { getTransactionData() }, [getTransactionData])
    
    const removeItemHandler = id => {
        TransactionHandler.delete(id);
        const stateUpdated = state.filter(category => category.id !== id);
        setState(stateUpdated);
        localStorage.setItem('CategoryList', JSON.stringify(stateUpdated));
    }

    return (
        <>
            {
                state.map(data => <TransactionItem key={data.id} data={data} removeHandler={removeItemHandler} />)
            }
        </>
    )
}

const TransactionListView = () => {
    return (
        <Layout content={
            <>
                <TransactionHeader />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>POS</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TransactionList />
                    </tbody>
                </Table>
            </>
        } />
    )
}

export const TransactionDetailView = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({id: '', title: ''});
    const { id } = useParams();

    const getTransactionData = useCallback(() => {
        TransactionHandler.get(id)
            .then(response => response.json())
            .then(result => { setState(result) });
    }, [id]);

    useEffect(() => {
        if (id !== 'add') getTransactionData(); else setState({id: '', title: ''});
    }, [getTransactionData, id]);

    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    
    const handleSubmit = event => {
        event.preventDefault();
        if (id === 'add') {
            TransactionHandler.post(state)
                .then(response => response.json())
                .then(data => { navigate('/admin/category/' + data.id) });
        } else {
            TransactionHandler.put(id, state)
                .then(response => response.json())
                .then(data => { setState(data) });
        }
    }

    return (
        <Layout content={
            <>
                <TransactionHeader />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            name="title" placeholder="Category Title"
                            value={ state.title || ''} onChange={ handleInputChange } 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">{ id === 'add' ? 'Save' : 'Update'}</Button>
                </Form>
            </>
        } />
    )
}

export default TransactionListView;