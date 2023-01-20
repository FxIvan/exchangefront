import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function ConnectSection() {
  return (
    <Container>
      <Row>
        <Row>
          <h2>COMMUNITY-OWNED AND OPERATED</h2>
        </Row>
        <Row>
          <Col>
            <Row>
              <h3>Enter a Universe of Connected Services.</h3>
            </Row>
            <Row>
              <p>
                Cronos apps and services connect using IBC, the Inter-Blockchain
                Communication protocol. This innovation enables you to freely
                exchange assets and data across sovereign.{" "}
              </p>
            </Row>
            <Row>
                <Col><Link href="/#">Learn More</Link></Col>
                <Col><Link href="/#">Explore Tokens <span>&gt;</span></Link></Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Row>
                <h3>
                  265 <span>+</span>
                </h3>
              </Row>
              <Row>
                <p>Apps & services</p>
              </Row>
            </Row>
            <Row>
              <Row>
                <h3>
                  $36B<span>+</span>
                </h3>
              </Row>
              <Row>
                <p>Digital assets</p>
              </Row>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
