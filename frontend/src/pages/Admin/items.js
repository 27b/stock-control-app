import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ItemHandler } from '../../services/AdminAPI';   
import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AdminPanelHeader } from '../../components/Header'


const ItemHeader = () => <AdminPanelHeader title="Items" link="/admin/item/add" button="New Item" />;

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
    const [state, setState] = useState([]);

    const getItemsData = useCallback(() => {
        if (localStorage.getItem('ItemList'))
            setState(JSON.parse(localStorage.getItem('ItemList')));
        ItemHandler.get()
            .then(response => response.json())
            .then(result => {
                setState(result.results);
                localStorage.setItem('ItemList', JSON.stringify(result.results));
            })
    }, [])

    useEffect(() => { getItemsData() }, [getItemsData])
    
    const removeItemHandler = id => {
        ItemHandler.delete(id);
        const stateUpdated = state.filter(item => item.id !== id);
        setState(stateUpdated);
        localStorage.setItem('ItemList', JSON.stringify(stateUpdated));
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

export const ItemDetailView = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({});
    const { id } = useParams();

    const getItemData = useCallback(() => {
        ItemHandler.get(id)
            .then(response => response.json())
            .then(data => { setState(data) });
    }, [id])

    useEffect(() => {
        if (id !== 'add') getItemData(); else setState({});
    }, [getItemData, id])

    const changeVisibility = () => {
        setState({...state, visibility: !state.visibility});
    }

    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    
    const handleSubmit = event => {
        event.preventDefault();
        state.category = parseInt(state.category);
        if (id === 'add') {
            ItemHandler.post(state)
                .then(response => {
                    if (response.status === 400) throw new Error("There is no category with this id.");
                    else return response.json();
                })
                .then(data => { navigate('/admin/item/' + data.id) })
                .catch(error => { alert(error) });
        } else {
            ItemHandler.put(id, state)
                .then(response => {
                    if (response.status === 400) throw new Error("There is no category with this id.");
                    else return response.json()
                })
                .then(data => { setState(data) })
                .catch(error => { alert(error); getItemData() });
        }
    }

    return (
        <Layout content={
            <>
                <ItemHeader />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" maxLength="10" name="category" placeholder="Category ID" value={ state.category || '' } onChange={ handleInputChange } />
                        <br />
                        <Form.Control name="title" placeholder="Item Title" value={ state.title || '' } onChange={ handleInputChange } />
                        <br />
                        <Form.Check type="switch" id="custom-switch" label="Visibility" checked={ state.visibility || false } onChange={ changeVisibility } />
                        <br />
                        <Form.Control type="number" name="quantity" placeholder="Item Quantity" value={ state.quantity || '' } onChange={ handleInputChange } />
                        <br />
                        <Form.Control type="number" name="unit_price" placeholder="Category Unit Price" value={ state.unit_price || '' } onChange={ handleInputChange } />
                    </Form.Group>
                    <Button variant="primary" type="submit">{ id === 'add' ? 'Save' : 'Update'}</Button>
                </Form>
            </>
        } />
    )
}

export default ItemListView;