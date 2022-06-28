import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { CategoryHandler } from '../../services/AdminAPI';   
import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const STATE = {categories: []};

const CategoryItem = ({id, title}) => {
    const navigate = useNavigate();
    const remove = false;
    
    const Update = () => {
        navigate('./' + id);
    }

    const Delete = useCallback( async () => {
        await CategoryHandler.delete(id);
    }, []);

    useEffect(() => {
        if (remove) {
            for (const category in STATE.categories)
                if (category.id == id)
                    STATE.categories.push(category);
        }
    }, []);

    return (
        <tr>
            <td>{ id }</td>
            <td>{ title }</td>
            <td>33</td>
            <td>
                <Button variant="primary" as="input" type="button" value="Update" onClick={Update} />{' '}
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
}

const AdminCategories = () => {
    const [state, setState] = useState(STATE);
 
    const get_categories = async () => {
        try {
            const data = await CategoryHandler.get();
            const result = await data.json();
            setState(result.results);
        }
        catch (error) {
            console.log('Category error: ' + error);
        }
    }

    useEffect(() => {
        get_categories();
        STATE.categories = state;
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
                        <CategoryList categories={STATE.categories} />
                    </tbody>
                </Table>
            </>
        } />
    )
}

export const AdminCategoryItem = () => {
    const [state, setState] = useState({id: '', title: ''});
    const { id } = useParams();

    const getCategoryData = async () => {
        try {
            const data = await CategoryHandler.get(id);
            const result = await data.json();
            setState(result);
        }
        catch (error) {
            console.log('Category Item error: ' + error);
        }
    }

    useEffect(() => { getCategoryData() }, [])

    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            console.log(state);
            let response = await CategoryHandler.put(id, state);
            let result = await response.json();
        }
        catch (error) {
            console.log('CategoryItem Submit error: ' + error);
        }
    }

    return (
        <Layout content={
            <>
                <h1>Categories</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="category" name="title" placeholder="Category Title"
                            value={ state.title } onChange={ handleInputChange } 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Update</Button>
                </Form>
            </>
        } />
    )
}



export default AdminCategories;