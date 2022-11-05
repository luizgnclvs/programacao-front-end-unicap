import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="m-2 rounded-2">
      <Container>
        <Navbar.Brand href="#home">Pokédex</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Type" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Grass
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fire
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Generation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                I
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                II
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Region" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Kanto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Johto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;