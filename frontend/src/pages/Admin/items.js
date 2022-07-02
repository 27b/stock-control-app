import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ItemHandler2 } from '../../services/AdminAPI';   
import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AdminPanelHeader } from '../../components/Header'

const ItemHeader = () => <AdminPanelHeader title="Items" link="/admin/item/add" button="Add Item" />;

const ItemItem = ({data, removeHandler}) => {
    const navigate = useNavigate();
    const Update = () => { navigate('./' + data.id) }

    return (
        <tr>
            <td>{ data.id }</td>
            <td>{ data.category || '' }</td>
            <td>{ data.title }</td>
            <td>{ data.visibility ? 'true' : 'false' }</td>
            <td>{ data.quantity }</td>
            <td>{ data.unit_price }</td>
            <td>{ data.last_modified }</td>
            <td>
                <Button variant="primary" as="input" type="button" value="Update" onClick={Update} />{' '}
                <Button variant="danger" as="input" type="button" value="Delete" onClick={() => removeHandler(data.id)} />
            </td>
        </tr>
    )
}

const ItemList = () => {
    const [state, setState] = useState([])
    const getItemsData = useCallback(() => {
        ItemHandler2.get()
            .then(response => response.json())
            .then(result => { setState(result.results) })
    }, [])

    useEffect(() => { getItemsData() }, [getItemsData])
    
    const removeItemHandler = id => {
        ItemHandler2.delete(id);
        const stateUpdated = state.filter(item => item.id !== id);
        setState(stateUpdated);
    }
     
    return (
        <>
            {
                state.map(item => <ItemItem key={item.id} data={item} removeHandler={removeItemHandler} />)
            }
        </>
    )
}

const ItemListView = () => {
    return (
        <Layout content={
            <>
                <ItemHeader />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Visible</th>
                            <th>Quantity</th>
                            <th>Unit price</th>
                            <th>Last Modified</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemList />
                    </tbody>
                </Table>
            </>
        } />
    )
}

export const ItemAddView = () => {
    const [state, setState] = useState({visibility: false});

    const changeVisibility = () => {
        setState({...state, visibility: !state.visibility});
    }

    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    
    const handleSubmit = async event => {
        event.preventDefault();
        state.category = parseInt(state.category);
        ItemHandler2.post(state)
            .then(response => {
                if (response.status === 200) return response.json();
                if (response.status === 400) throw new Error("There is no category with this id.");
            })
            .then(data => { console.log(data) })
            .catch(error => { alert(error) });
    }

    return (
        <Layout content={
            <>
                <ItemHeader />
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="number" maxLength="10" name="category" placeholder="Category ID"
                            onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Control
                            name="title" placeholder="Item Title"
                            onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Visibility"
                            checked={ state.visibility }
                            onChange={ changeVisibility }
                        />
                        <br />
                        <Form.Control
                            type="number" name="quantity" placeholder="Item Quantity"
                            onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Control
                            type="number" name="unit_price" placeholder="Category Unit Price"
                            onChange={ handleInputChange } 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Update</Button>
                </Form>
            </>
        } />
    )
}

export const ItemDetailView = () => {
    const [state, setState] = useState({});
    const { id } = useParams();

    const getItemData = useCallback(() => {
        ItemHandler2.get(id)
            .then(response => response.json())
            .then(data => { setState(data) })
    }, [id])

    useEffect(() => { getItemData() }, [getItemData])

    const changeVisibility = () => {
        setState({...state, visibility: !state.visibility});
    }

    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    
    const handleSubmit = async event => {
        event.preventDefault();
        state.category = parseInt(state.category);
        console.log(state);
        ItemHandler2.put(id, state)
            .then(response => {
                if (response.status === 200) return response.json();
                if (response.status === 400) throw new Error("There is no category with this id.");
            })
            .then(data => { setState(data) })
            .catch(error => { alert(error); getItemData() });
    }

    return (
        <Layout content={
            <>
                <ItemHeader />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="number" maxLength="10" name="category" placeholder="Category ID"
                            value={ state.category || '' } onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Control
                            type="category" name="title" placeholder="Item Title"
                            value={ state.title || '' } onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Visibility"
                            checked={ state.visibility || false}
                            onChange={ changeVisibility }
                        />
                        <br />
                        <Form.Control
                            type="category" name="quantity" placeholder="Item Quantity"
                            value={ state.quantity || 0 } onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Control
                            type="category" name="unit_price" placeholder="Category Unit Price"
                            value={ state.unit_price || 0 } onChange={ handleInputChange } 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Update</Button>
                </Form>
            </>
        } />
    )
}

export default ItemListView;