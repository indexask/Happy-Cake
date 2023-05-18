import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav className='bg-danger p-2 vw-100 d-flex'>
      <Nav.Item>
        <Link to="/" className='text-light a'> Home <span className='icon-navbar'>🏠</span></Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contacto" className='text-light a'> Contacto <span className='icon-navbar'>📒</span></Link>
      </Nav.Item>
      <Nav.Item className='ms-auto'>
      <Link to="/" className='text-light a'> Happy Cake <span className='icon-navbar happy'>🍰</span></Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar
