import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Menu() {

    const iconStyle = {
        color: 'white',
    };

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="logo">Rachid HARAKA</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/education">
                            <Nav.Link>Education</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/experience">
                            <Nav.Link>Experience</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/other">
                            <Nav.Link>Other</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <a href="https://www.linkedin.com/in/rharaka/" target="_blank" className="social-link nav-link">
                        <span style={iconStyle}>
                            <i className="fa-brands fa-linkedin fa-xl"></i>
                        </span>
                    </a>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <br />
        </>
    );
}

export default Menu;