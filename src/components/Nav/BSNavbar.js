import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Example from './Example';
import { Link, NavLink } from 'react-router-dom';
import classes from './Example.module.css'

function OffcanvasExample() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">

                    <Container fluid>
                        <Navbar.Brand href="/DTIUniversity/">DTIU</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Debt To Income University
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Example />
                                    <br />
                                    <Button variant="secondary">
                                    <NavLink to='/DTIUniversity/' className={classes.pages}>Home</NavLink>
                                    </Button>
                                    <br/>
                                    <Button variant="secondary">
                                        <Link to='/DTIUniversity/about' className={classes.pages }> About </Link>
                                    </Button>
                                    <br />
                                    <Button variant="secondary">
                                        <Link to='/DTIUniversity/email' className={classes.pages }> Email </Link>
                                    </Button>
                                    <br />
                                    {/* <Link to='/DTIUniversity/COLD'> C.O.L.D. </Link> */}
                                    {/* <Link to='/DTIUniversity/LoanPaymentCalculator'> calculator </Link> */}
                                    
                                    <Button variant="secondary">


                                        <Link to='/DTIUniversity/calculator' className={classes.pages} > calculator </Link>
                                    </Button>

                                    {/* <Nav.Link href="#action2">Link</Nav.Link> */}

                                    {/* NAV DROPDOWN */}
                                    {/* <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown> */}
                                </Nav>

                                {/* SEARCH FORM */}
                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;