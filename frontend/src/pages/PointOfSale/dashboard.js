import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ItemHandler, TransactionHandler } from '../../services/AdminAPI';

const ItemListState = [];

const ItemModal = ({data}) => {
    const add = () => { ItemListState.push(data) }

    return (
        <div className="p-1 clearfix">
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
    
    const getData = () => {
        ItemHandler.get()
            .then(response => response.json())
            .then(result => { setState(result.results) })
    }

    useEffect(() => { getData() }, [])

    return (
        <>
            {
                state.map(data => <ItemModal key={data.id} data={data} />)
            }
        </>
    )
}

const ItemAdded = ({data}) => {
    return (
        <div className="pt-2 pb-2 w-100 d-flex justify-content-between align-items-center">
            {data.title}
            <Button variant="danger" as="input" type="button" value="X" />
        </div>
    )
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

    const sendItems = () => {
        const data = ItemListState;
        TransactionHandler.post(data);
    }

    return (
        <>
            <Navbar />
            <div className="w-100 h-100 d-flex align-items-center justify-content-center align-items-center">
                <div className="w-25 p-3 border rounded bg-light">
                    <div className="pb-2">
                        <h3>Added items</h3>
                        <ItemAddedList />
                    </div>
                    <p className="border-top pt-3 text-secondary d-flex justify-content-between">
                        <div>Price:</div>
                        <div>127.20</div>
                    </p>
                    <div className="d-flex justify-content-between border-top pt-3">
                        <Button variant="success" as="input" type="button" value="Success" onClick={sendItems} />{' '}
                        <Button variant="primary" as="input" type="button" value="Add Items" onClick={handleShow} />
                    </div>
                </div>
            </div>
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