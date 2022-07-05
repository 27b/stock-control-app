import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from 'react';
import { UserHandler } from '../../services/AdminAPI';
import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AdminPanelHeader } from '../../components/Header';


const UserHeader = () => <AdminPanelHeader title="Users" link="/admin/user/add" button="New User" />;

const UserItem = ({data, removeHandler}) => {
    const navigate = useNavigate();

    const Update = () => { navigate('./' + data.id) }

    return (
        <tr>
            <td>{ data.id }</td>
            <td>{ data.username }</td>
            <td>{ data.role }</td>
            <td>{ data.email }</td>
            <td>
                <Button variant="primary" as="input" type="button" value="Update" onClick={Update} />{' '}
                <Button variant="danger" as="input" type="button" value="Delete" onClick={() => removeHandler(data.id)} />
            </td>
        </tr>
    )
}

const UserList = () => {
    const [state, setState] = useState([]);

    const getUserData = useCallback(() => {
        setState(JSON.parse(localStorage.getItem('UserList')));
        UserHandler.get()
            .then(response => response.json())
            .then(result => {
                setState(result);
                localStorage.setItem('UserList', JSON.stringify(result));
            });
    }, []);

    useEffect(() => { getUserData() }, [getUserData])
    
    const removeUserHandler = id => {
        UserHandler.delete(id);
        const stateUpdated = state.filter(user => user.id !== id);
        setState(stateUpdated);
    }

    return (
        <>
            {
                state.map(user => <UserItem key={user.id} data={user} removeHandler={removeUserHandler} />)
            }
        </>
    )
}

const UserListView = () => {
    return (
        <Layout content={
            <>
                <UserHeader />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserList />
                    </tbody>
                </Table>
            </>
        } />
    )
}

export const UserDetailView = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({});
    const { id } = useParams();

    const getUserData = useCallback(() => {
        UserHandler.get(id)
            .then(response => response.json())
            .then(result => { setState(result) });
    }, [id]);

    useEffect(() => {
        if (id !== 'add') getUserData(); else setState({});
    }, [getUserData, id]);

    const handleInputChange = e => setState({...state, [e.target.name]: e.target.value});
    
    const handleSubmit = event => {
        event.preventDefault();
        if (id === 'add') {
            UserHandler.post(state)
                .then(response => response.json())
                .then(data => { navigate('/admin/user/' + data.id) });
        } else {
            UserHandler.put(id, state)
                .then(response => response.json())
                .then(data => { setState(data) });
        }
    }

    return (
        <Layout content={
            <>
                <UserHeader />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            name="username" placeholder="Username"
                            value={ state.username || '' } onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Control
                            name="role" placeholder="Role"
                            value={ state.role || '' } onChange={ handleInputChange } 
                        />
                        <br />
                        <Form.Control
                            name="email" placeholder="Email"
                            value={ state.email || '' } onChange={ handleInputChange } 
                        />
                        {
                            id === 'add' ?
                            <>
                                <br />
                                <Form.Control
                                    type="password"
                                    name="password" placeholder="Password"
                                    onChange={ handleInputChange }
                                />
                            </>
                            : ''
                        }
                    </Form.Group>
                    <Button variant="primary" type="submit">{ id === 'add' ? 'Save' : 'Update'}</Button>
                </Form>
            </>
        } />
    )
}

export default UserListView;