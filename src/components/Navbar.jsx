import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav className='bg-danger vw-100 d-flex'>
      <Nav.Item>
        <Nav.Link className='text-light' href="/">Home <span className='icon-navbar'>🏠</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='text-light' href='/contacto'>Contacto<span className='icon-navbar'>📒</span></Nav.Link>
      </Nav.Item>
      <Nav.Item className='ms-auto'>
        <Nav.Link className='text-light' >Happy Cake<span className='icon-navbar happy'>🍰</span></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar