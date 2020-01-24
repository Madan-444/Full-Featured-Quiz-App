import React, { useState } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card,CardTitle, CardText } from 'reactstrap';

function MyModal({ clasbtn,ans }) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <button className={clasbtn} onClick={toggle}> Submit ??</button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Congrats !! </ModalHeader>
                <ModalBody>
                    <Card body>
                        <CardTitle>Your correct answers : {ans} </CardTitle>
                        <CardText>To see the answers Click bellow.</CardText>
                        <Button>See answers ?</Button>
                    </Card>
                </ModalBody>
                <ModalFooter>
                <a href='/'> <Button color="primary" onClick={toggle}> Play Again</Button></a>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default MyModal
