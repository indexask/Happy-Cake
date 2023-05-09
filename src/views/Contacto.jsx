import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
  return (
    <div>

    <h2>Cuentanos, En que te podemos ayudar?</h2>
    <Form className='text-center'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Ingresar Correo" />
        <Form.Text className="text-muted">
          No compartiremos tu correo con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Ingresar Descripcion" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default Contacto;