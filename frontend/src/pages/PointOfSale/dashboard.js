import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ItemHandler } from '../../services/AdminAPI';

const ItemListState = [];

const ItemModal = ({data}) => {
    const add = () => { ItemListState.push(data) }

    return (
        <div className="p-3 clearfix">
            <span>{ data.title }</span>
            <Button
                className="float-end" variant="primary" as="input" type="button" value="Add"
                onClick={add}
            />
        </div>
    )
}

const ItemModalList = () => {
    const [state, setState] = useState([]);
    
    const getData = async () => {
        try {
            const data = await ItemHandler.get();
            const result = await data.json();
            setState(result.results);
        }
        catch (error) {
            console.log('Item Modal List error: ' + error);
        }
    }

    useEffect(() => { getData() })

    return (
        <>
            {
                state.map(data => <ItemModal key={data.id} data={data} />)
            }
        </>
    )
}

const ItemAdded = ({data}) => {
    return <div className="p-3 clearfix">{data.title}</div>
}

const ItemAddedList = () => {
    const [state, setState] = useState([]);

    useEffect(() => { setState(ItemListState) }, [])

    return (
        <>
            {
                state.map(data => <ItemAdded data={data} />)
            }
        </>
    )
}

const PointOfSaleView = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar />
            <div>
                <h3>Added items:</h3>
                <ItemAddedList />
            </div>
            <Button variant="primary" as="input" type="button" value="Add Item" onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ItemModalList />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PointOfSaleView;