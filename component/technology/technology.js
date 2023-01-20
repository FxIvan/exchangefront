import { Col, Container, Row } from "react-bootstrap";

export default function Technology() {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Row>
            <h3>Technology</h3>
          </Row>
          <Row>
            <Col>
              <Row>
                <h2>The most trusted way to build value.</h2>
              </Row>
              <Row>
                <p>
                  Cronos is a state-of-the-art blockchain framework that powers
                  the Cronos Hub and its rapidly expanding orbit of sovereign
                  chains.
                  <br />
                  Developers can use the SDK to build innovative applications
                  that create value through exchange with the Cronos Hub.
                </p>
              </Row>
            </Col>
            <Col>
              <Row>
                <Row>
                  <h3>PROOF OF STAKE</h3>
                </Row>
                <Row>
                  <h2>99%</h2>
                </Row>
                <Row>
                  <h3>Lower carbon footprint</h3>
                </Row>
              </Row>
            </Col>
            <Row>
              <Col>
                <Row>
                  <Row>
                    <h3>LOW FEES</h3>
                  </Row>
                  <Row>
                    <h2>$0.01</h2>
                  </Row>
                  <Row>
                    <p>Enjoy the lowest fees - almost zero</p>
                  </Row>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Row>
                    <h3>FAS TRANSACTION</h3>
                  </Row>
                  <Row>
                    <h2>0.5sec</h2>
                  </Row>
                  <Row>
                    <p>Transactions confirmed in seconds.</p>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}
