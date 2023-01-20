import { Col, Nav, Navbar, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from "./css/Header.module.css";

export const HomeHeader = () => {
  return (
    <>
      <div className={styles.spacingNav}></div>
      <Container fluid className={styles.containerNav}>
        <Row>
          <Col>
            <Navbar bg="bg-transparent" variant="light">
              <Container>
                <Nav className="me-auto">
                  <Nav.Link href="#home">CRONOS</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
          <Col className="text-center">
            <Navbar bg="bg-transparent" variant="light">
              <Container>
                <Nav className="m-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
          <Col>
            <Navbar bg="bg-transparent" variant="light">
              <Container className="d-flex justify-content-end">
                <Nav>
                  <Nav.Link href="#home">
                    Get Cronos <span>&gt;</span>
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};
