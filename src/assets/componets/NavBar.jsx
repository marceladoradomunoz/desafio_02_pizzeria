import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import iconPizza from '/icon-pizza.png'
import FormatPizzeria from './FormatPizzeria';

const NavBar = () => {
    const token = false;

  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className='nav-container'>Pizzeria Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='basic-navbar-nav' id="basic-navbar-nav">
                    <Nav className="btn-nav me-auto mb-2 mb-lg-0">
                        <Nav.Item className="espaciado-items">
                            <Button variant="outline-light" size="sm"><img src={iconPizza} alt="iconoPizza"></img> Home</Button>
                        </Nav.Item>
                        <Nav.Item className="espaciado-items">
                            <Button variant="outline-light" size="sm">{token ? '🔓Profile' : '🔐Login'}</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="outline-light" size="sm">{token ? '🔒Logout' : '🔐Register'}</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;