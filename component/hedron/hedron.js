import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import hidron from "../../public/images/hedronimg.svg";

export default function HedronSection() {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col>
            <Image src={hidron} width={100} height={100} />
          </Col>
          <Col>
            <Row>
              <h2>Secured by the Hedron.</h2>
            </Row>
            <Row>
              <p>
                In return for securing the services on the Cronos Hub,
                transaction fees and staking rewards are distributed to HEDRON
                stakers.
              </p>
            </Row>
            <Row>

                <Col><Link href="/#">Start Taking</Link></Col>
                <Col><Link href="/#">Learn More</Link></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
