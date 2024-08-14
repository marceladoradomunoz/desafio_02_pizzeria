import { useState } from 'react';
import {Button, Form, Row, Col } from 'react-bootstrap';
import MensajeModal from './MensajeModal';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const validaFormulario = (e) => {
        e.preventDefault();

        if (email.length==0){
            setModalTitle('Error');
            setModalMessage('Correo electrónico en blanco.');
            setShowModal(true);
            return;
        }
        if (password.length==0){
            setModalTitle('Error');
            setModalMessage('Campo contraseña en blanco.');
            setShowModal(true);
            return;
        }
        if (confirmPassword.length==0){
            setModalTitle('Error');
            setModalMessage('Campo confirmación de contraseña en blanco.');
            setShowModal(true);
            return;
        }
        if (password.length < 6){
            setModalTitle('Error');
            setModalMessage('La contraseña no cumple el mín requerido (6 caracteres).');
            setShowModal(true);
            return;
        }

        if (password !== confirmPassword) {
            setModalTitle('Error');
            setModalMessage('Las contraseñas no coinciden.');
            setShowModal(true);
            return;
        }

        setModalTitle('OK');
        setModalMessage(`Registro completado correctamente con la cuenta ${email}!`);
        setShowModal(true);

    };

    const cierreModal = () => setShowModal(false);

  return (
        <div className="form-root">
            <div className="inicial container-format">
                <Row className="justify-content-center align-items-center">
                    <Col md={7} className="d-none d-md-block bg-image"> {/* Oculta la imagen en pantallas pequeñas */}
                    </Col>
                    <Col md={5}>
                        <div>
                            <h3 className="text-center mt-2 mb-0 text-light">Formulario de registro</h3>
                            <h5 className="text-center mt-0 mb-4 text-light">Pizzeria Mamamia</h5>
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

                            <Form.Group controlId="formPassword" className='pt-2'>
                            <Form.Label className="text-light">Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword" className='pt-2 pb-4'>
                            <Form.Label className="text-light">Confirmar Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirmar Contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            </Form.Group>

                            <Button variant="outline-warning" type="submit">Registrarse</Button>
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

export default Register;