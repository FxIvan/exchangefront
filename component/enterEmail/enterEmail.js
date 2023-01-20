import { Col, Container, Row } from "react-bootstrap";

export default function EnterEmail() {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col>
            <Row>
                <h4>Receive transmissions</h4>
            </Row>
            <Row>
                <p>Unsubscribe at any time. Privacy policy</p>
            </Row>
          </Col>
          <Col>
            <Row>
              <form action="/send-data-here" method="post">
                <label for="first">Ingrese email</label>
                <input type="text" id="first" name="first" placeholder="Enter email" />
                <button type="submit">Submit</button>
              </form>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
