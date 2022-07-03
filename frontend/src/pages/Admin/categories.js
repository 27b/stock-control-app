import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from 'react';
import { CategoryHandler } from '../../services/AdminAPI';
import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AdminPanelHeader } from '../../components/Header';


const CategoryHeader = () => <AdminPanelHeader title="Categories" link="/admin/category/add" button="New Category" />;

const CategoryItem = ({data, removeHandler}) => {
    const navigate = useNavigate();

    const Update = () => { navigate('./' + data.id) }

    return (
        <tr>
            <td>{ data.id }</td>
            <td>{ data.title }</td>
            <td>33</td>
            <td>
                <Button variant="primary" as="input" type="button" value="Update" onClick={Update} />{' '}
                <Button variant="danger" as="input" type="button" value="Delete" onClick={() => removeHandler(data.id)} />
            </td>
        </tr>
    )
}

const CategoryList = () => {
    const [state, setState] = useState([]);

    const getCategoriesData = useCallback(() => {
        setState(JSON.parse(localStorage.getItem('CategoryList')))
        CategoryHandler.get()
            .then(response => response.json())
            .then(result => {
                setState(result.results);
                localStorage.setItem('CategoryList', JSON.stringify(result.results));
            });
    }, []);

    useEffect(() => { getCategoriesData() }, [getCategoriesData])
    
    const removeItemHandler = id => {
        CategoryHandler.delete(id);
        const stateUpdated = state.filter(category => category.id !== id);
        setState(stateUpdated);
    }

    return (
        <>
            {
                state.map(data => <CategoryItem key={data.id} data={data} removeHandler={removeItemHandler} />)
            }
        </>
    )
}

const CategoryListView = () => {
    return (
        <Layout content={
            <>
                <CategoryHeader />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Items</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CategoryList />
                    </tbody>
                </Table>
            </>
        } />
    )
}

export const CategoryDetailView = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({id: '', title: ''});
    const { id } = useParams();

    const getCategoryData = useCallback(() => {
        CategoryHandler.get(id)
            .then(response => response.json())
            .then(result => { setState(result) });
    }, [id]);

    useEffect(() => {
        if (id !== 'add') getCategoryData(); else setState({id: '', title: ''});
    }, [getCategoryData, id]);

    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    
    const handleSubmit = event => {
        event.preventDefault();
        if (id === 'add') {
            CategoryHandler.post(state)
                .then(response => response.json())
                .then(data => { navigate('/admin/category/' + data.id) });
        } else {
            CategoryHandler.put(id, state)
                .then(response => response.json())
                .then(data => { setState(data) });
        }
    }

    return (
        <Layout content={
            <>
                <CategoryHeader />
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



export default CategoryListView;