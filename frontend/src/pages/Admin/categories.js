import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { CategoryHandler } from '../../services/AdminAPI';
import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

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
        STATE.categories = state
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



export default AdminCategories;