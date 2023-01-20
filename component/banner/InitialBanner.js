import { Container, Row } from "react-bootstrap";
import styles from "./css/Banner.module.css";

export default function InitialBanner() {
  return (
    <Container fluid className={styles.containerBanner}>
      <Container>
        <Row>
          <Row>
            <h2>WELCOME TO CRONO</h2>
          </Row>
          <Row><h1>The Internet of Blockchains.</h1></Row>
          <Row>
            <p>
              Cronos is an ever expanding ecosystem of connected apps and
              services, built for a decentralized future.
            </p>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}
