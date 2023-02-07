// eslint-disable-next-line
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// eslint-disable-next-line
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// eslint-disable-next-line
import NavDropdown from 'react-bootstrap/NavDropdown';
import Example from './Example';

function NavScrollExample() {
    return (
        <Navbar bg="light" expand="sm">
            <Container fluid>
                <Navbar.Brand href="#" className=''>DTIU</Navbar.Brand>
                <Example />
                {/* <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll">
                    
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1"><Example /></Nav.Link>
                        <Nav.Link href="#action2"></Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;