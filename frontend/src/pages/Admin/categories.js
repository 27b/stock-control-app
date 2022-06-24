import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const AdminCategories = () => {
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
                        <tr>
                            <td>1</td>
                            <td>Books</td>
                            <td>33</td>
                            <td>
                                <Button variant="primary">Rename</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pencil</td>
                            <td>3</td>
                            <td>
                                <Button variant="primary">Rename</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Papers</td>
                            <td>2</td>
                            <td>
                                <Button variant="primary">Rename</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        } />
    )
}

export default AdminCategories;