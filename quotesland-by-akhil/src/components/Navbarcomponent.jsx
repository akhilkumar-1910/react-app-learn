import {Navbar, Nav, Container, Row} from 'react-bootstrap';

const Navbarcomponent = () => {
    return (
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Row md={2}>
                    <Navbar.Brand href="#home" style={{color: "white"}}>Quotesland</Navbar.Brand>
                </Row>
                <Row md={6}></Row>
                <Row md={4}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
                        <Nav.Link href="#more_quotes" style={{color: "white"}}>More Quotes</Nav.Link>
                        <Nav.Link href="#about" style={{color: "white"}}>About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Navbarcomponent;
