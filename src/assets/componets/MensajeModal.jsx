import { Modal, Button} from 'react-bootstrap';


const MensajeModal = (props) => {
  return (
    <div>
      <Modal show={props.showModal} onHide={props.cierreModal} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>
                    {props.modalTitle}
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{props.modalMessage}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="outline-warning" onClick={props.cierreModal}>
                        Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>
    </div>
  )
}

export default MensajeModal;