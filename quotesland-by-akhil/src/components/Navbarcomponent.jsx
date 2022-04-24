import {Navbar, Nav, Container} from 'react-bootstrap';

const Navbarcomponent = () => {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Quotesland</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#more_quotes">More Quotes</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarcomponent;
