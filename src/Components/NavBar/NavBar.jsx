import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
    <Container fluid>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Xbox" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Juegos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Recomendados</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PlaySation" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Juegos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Recomendados</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Nintendo" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Juegos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Recomendados</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="Carrito"> <CartWidget /> </Nav.Link>

        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavBar;