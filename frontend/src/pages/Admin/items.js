import Layout from './_layout';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const AdminItems = () => {
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
                        <tr>
                            <td>1</td>
                            <td>3</td>
                            <td>First Book</td>
                            <td>True</td>
                            <td>44</td>
                            <td>3.2</td>
                            <td>02-06-2022 22:04</td>
                            <td>
                                <Button variant="primary">Update</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>3</td>
                            <td>The Pragmatic Programmer</td>
                            <td>True</td>
                            <td>8</td>
                            <td>20.2</td>
                            <td>08-01-2022 20:04</td>
                            <td>
                                <Button variant="primary">Update</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2</td>
                            <td>Second Book</td>
                            <td>True</td>
                            <td>20</td>
                            <td>6.5</td>
                            <td>04-03-2022 19:22</td>
                            <td>
                                <Button variant="primary">Update</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </>
        } />
    )
}

export default AdminItems;