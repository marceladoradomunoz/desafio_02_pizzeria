import { useState } from 'react';
import {Button, Form, Row, Col } from 'react-bootstrap';
import MensajeModal from './MensajeModal';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const validaFormulario = (e) => {
        e.preventDefault();

        if (email.length==0){
            setModalTitle('Error');
            setModalMessage('Ingrese un correo electrónico válido.');
            setShowModal(true);
            return;
        }
        if (password.length==0){
            setModalTitle('Error');
            setModalMessage('Campo contraseña en blanco.');
            setShowModal(true);
            return;
        }
        if (password.length < 6){
            setModalTitle('Error');
            setModalMessage('La contraseña no cumple el mínimo de caractéres requeridos');
            setShowModal(true);
            return;
        }

        setModalTitle('OK');
        setModalMessage(`Ha iniciado sesión con la cuenta ${email}!`);
        setShowModal(true);

    };

    const cierreModal = () => setShowModal(false);

  return (
        <div className="form-login">
            <div className="form-inicial container-format">
                <Row className="justify-content-center align-items-center">
                    <Col md={7} className="d-none d-md-block bg-image"> {/* Oculta la imagen en pantallas pequeñas */}
                    </Col>
                    <Col md={5}>
                        <div>
                            <h3 className="text-center mt-2 mb-0 text-light">Login</h3>
                            <h5 className="text-center mt-3 mb-4 text-light">Iniciar sesión</h5>
                        </div>
                        <Form onSubmit={validaFormulario}>
                            <Form.Group controlId="formEmail" className="p-0">
                                <Form.Label className="text-light">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className='pt-2  pb-4'>
                            <Form.Label className="text-light">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </Form.Group>
                            <Button variant="outline-warning" type="submit">Login</Button>
                        </Form>
                        </Col>
                </Row>
                <MensajeModal
                    showModal={showModal}
                    cierreModal={cierreModal}
                    modalTitle={modalTitle}
                    modalMessage={modalMessage}
                />
            </div>
        </div>
  );
};

export default Login;