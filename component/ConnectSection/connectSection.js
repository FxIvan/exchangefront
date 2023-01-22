import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from './css/Connect.module.css'
export default function ConnectSection() {
  return (
    <Container fluid className={styles.containerSection}>
      <Container className={styles.subcontainerSection}>
        <Row>
          <h2 className={styles.h2Connect}>COMMUNITY-OWNED AND OPERATED</h2>
        </Row>
        <Row className="mt-5 mb-3">
          <Col className="">
            <Row>
              <h3 className={styles.h3Titule}>Enter a Universe of Connected Services.</h3>
            </Row>
            <Row className="mt-5 mb-5">
              <p className={styles.pConnect}>
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

          <Col className={"text-end " + styles.numberDescription }>
            <Row className={styles.descriptionblock}>
              <Row>
                <h3 className={styles.h3Titule}>
                  265 <span>+</span>
                </h3>
              </Row>
              <Row>
                <p>Apps & services</p>
              </Row>
            </Row>
            <Row className={styles.descriptionblock}>
              <Row>
                <h3 className={styles.h3Titule}>
                  $36B<span>+</span>
                </h3>
              </Row>
              <Row>
                <p>Digital assets</p>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
