import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ItemHandler } from '../../services/AdminAPI';   
import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const STATE = {items: []};

const ItemItem = ({data}) => {
    const navigate = useNavigate();
    const remove = false;
    
    const Update = () => {
        navigate('./' + data.id);
    }

    const Delete = useCallback( async () => {
        await ItemHandler.delete(data.id);
    }, []);

    useEffect(() => {
        if (remove) {
            for (const item in STATE.items)
                if (item.id == data.id)
                    STATE.items.push(item);
        }
    }, []);

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
                <Button variant="danger" as="input" type="button" value="Delete" onClick={Delete} />
            </td>
        </tr>
    )
}

const ItemList = ({items}) => {
    if (Array.isArray(items)) {
        const listOfItems = items.map(item => <ItemItem key={item.id} data={item} />);
        return listOfItems;
    }
}

const ItemListView = () => {
    const [state, setState] = useState(STATE);
 
    const get_items = async () => {
        try {
            const data = await ItemHandler.get();
            const result = await data.json();
            console.log(result)
            setState(result.results);
        }
        catch (error) {
            console.log('Item error: ' + error);
        }
    }

    useEffect(() => {
        get_items();
        STATE.items = state;
    })

    return (
        <Layout content={
            <>
                <h1>Items</h1>
                <Table striped bordered hover className="mt-5">
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
                        <ItemList items={ STATE.items } />
                    </tbody>
                </Table>
            </>
        } />
    )
}

export const ItemDetailView = () => {
    const [state, setState] = useState({});
    const { id } = useParams();

    const getItemData = async () => {
        try {
            const data = await ItemHandler.get(id);
            const result = await data.json();
            setState(result);
        }
        catch (error) {
            console.log('Item Detail error: ' + error);
        }
    }

    useEffect(() => { getItemData() }, [])

    const changeVisibility = () => {
        state.visibility = !state.visibility;
    }

    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            state.category = parseInt(state.category);
            let response = await ItemHandler.put(id, state);
            let result = await response.json();
            if (response.status == 400) {
                getItemData();
                alert("There is no category with this id.")
            } else {
                setState(result)
            }
        }
        catch (error) {
            console.log('AdminItemDetail Submit error: ' + error);
        }
    }

    return (
        <Layout content={
            <>
                <h1>Items</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="number" maxLength="10" name="category" placeholder="Category ID"
                            value={ state.category } onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Control
                            type="category" name="title" placeholder="Item Title"
                            value={ state.title } onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Visibility"
                            defaultChecked={ state.visibility }
                            onChange={changeVisibility}
                        />
                        <br />
                        <Form.Control
                            type="category" name="quantity" placeholder="Item Quantity"
                            value={ state.quantity } onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Control
                            type="category" name="unit_price" placeholder="Category Unit Price"
                            value={ state.unit_price } onChange={ handleInputChange } 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Update</Button>
                </Form>
            </>
        } />
    )
}

export default ItemListView;