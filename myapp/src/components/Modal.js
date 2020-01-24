import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card,CardTitle, CardText } from 'reactstrap';

function MyModal({ clasbtn }) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <button className={clasbtn} onClick={toggle}>Submit ??</button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Congrats !! </ModalHeader>
                <ModalBody>
                    <Card body>
                        <CardTitle>Your correct answers : {} </CardTitle>
                        <CardText>To see the answers Click bellow.</CardText>
                        <Button>See answers ?</Button>
                    </Card>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Play Again</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Quit ?</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default MyModal
