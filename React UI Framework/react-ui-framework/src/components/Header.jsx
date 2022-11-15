import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';  
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

function Header() {
  const [placeholder, setPlaceholder] = useState("Buscar");
  let randomNum = Math.floor(Math.random() * (1154 + 1));

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomNum}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Este é um erro HTTP: O status é ${response.status}`
          );
        }

        return response.json();
      })
      .then((data) => {
        let str = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        setPlaceholder(str.replace(/-/g, " "));
      })
  }, [])

  return (
    <Navbar bg="light" variant="light" className="m-2 mb-3 rounded-2">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="https://www.blackoutpixelmon.xyz/ball.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Pokédex
        </Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={placeholder}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form> 
      </Container>
    </Navbar>
  )
}

export default Header;