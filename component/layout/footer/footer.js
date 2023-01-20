import Link from "next/link";
import { Container , Col , Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Container>
            <Row>
          <Col>
            <Row><h4>Learn</h4></Row>
            <Row>
              <nav>
                <ul>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                </ul>
              </nav>
            </Row>
          </Col>
          <Col>
            <Row><h4>Build</h4></Row>
            <Row>
              <nav>
                <ul>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                </ul>
              </nav>
            </Row>
          </Col>
          <Col>
            <Row><h4>Explore</h4></Row>
            <Row>
              <nav>
                <ul>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                </ul>
              </nav>
            </Row>
          </Col>
          <Col>
            <Row><h4>Participate</h4></Row>
            <Row>
              <nav>
                <ul>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                </ul>
              </nav>
            </Row>
          </Col>
          <Col>
            <Row><h4>Resources</h4></Row>
            <Row>
              <nav>
                <ul>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                  <li><Link href="/#">Lorem</Link></li>
                </ul>
              </nav>
            </Row>
          </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}
