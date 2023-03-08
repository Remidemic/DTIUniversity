import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                New? Click Here
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to Debt to Income University!</Modal.Title>
                </Modal.Header>
                <Modal.Body>This web tool will render important expense and related data points about every acredited college / university in the united states.
                    Begin by entering a learning institution in the search bar. A list of school facts will populate. Continue down the page to see a full list of programs offered at the sinstitution. Do you see a $ next to a program? That means there is reported data from the instition about expected future earnings. Good Luck!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Example