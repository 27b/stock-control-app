import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ItemHandler, TransactionHandler } from '../../services/AdminAPI';

const ItemModal = ({data, add}) => {
    return (
        <div className="p-1 clearfix">
            <span>{ data.title } ({ data.quantity })</span>
            <Button
                className="float-end" variant="primary" as="input" type="button" value="Add"
                onClick={() => add(data)}
            />
        </div>
    )
}

const ItemModalList = ({func}) => {
    const [itemList, setState] = useState([]);
    
    const getData = () => {
        ItemHandler.get()
            .then(response => response.json())
            .then(result => { setState(result.results) })
    }

    useEffect(() => { getData() }, [])

    return (
        <>
            {
                itemList.map(data => <ItemModal key={data.id} data={data} add={func} />)
            }
        </>
    )
}

const ItemAdded = ({data, remove}) => {
    return (
        <div className="pt-2 pb-2 w-100 d-flex justify-content-between align-items-center">
            { data.title }
            <Button variant="danger" as="input" type="button" value="X" onClick={() => remove(data)} />
        </div>
    )
}

const PointOfSaleView = () => {
    const [state, setState] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addItemToFatherState = newItem => {
        const itemsEqualToNewItem = state.filter(item => item.id === newItem.id);
        if (itemsEqualToNewItem.length === 0) {
            state.push(newItem);
        }
    }

    const removeItemToFatherState = data => { setState(state.filter(item => item.id !== data.id)) }

    const postTransaction = () => { console.log('Hello World!') }

    return (
        <>
            <Navbar />
            <div className="w-100 h-100 d-flex align-items-center justify-content-center align-items-center">
                <div className="w-25 p-3 border rounded bg-light">
                    <div className="pb-2">
                        <h3>Added items</h3>
                        {
                            state.map(data => <ItemAdded key={data.id} data={data} remove={removeItemToFatherState} />)
                        }
                    </div>
                    <p className="border-top pt-3 text-secondary d-flex justify-content-between">
                        <div>Price:</div>
                        <div>127.20</div>
                    </p>
                    <div className="d-flex justify-content-between border-top pt-3">
                        <Button variant="success" as="input" type="button" value="Success" onClick={postTransaction} />{' '}
                        <Button variant="primary" as="input" type="button" value="Add Items" onClick={handleShow} />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ItemModalList func={ addItemToFatherState } />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PointOfSaleView;