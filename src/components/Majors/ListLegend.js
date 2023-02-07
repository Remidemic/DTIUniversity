import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ListLegend() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="secondary" onClick={handleShow}>
                Legend
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Program Legend</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Credential symbol next to program major:
                    <br/>
                    
                    <br />
                    A - Associates Degree
                    <br />
                    B - Bachelor’s Degree
                    <br />
                    M - Masters
                    <br />
                    D - Doctoral
                    <br />
                    $ - Earnings data present 

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ListLegend