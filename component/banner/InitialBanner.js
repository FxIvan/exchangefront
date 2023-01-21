import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import styles from "./css/Banner.module.css";
import hedragon from "../../public/images/hedronimg.svg";

export default function InitialBanner() {
  return (
    <Container
      fluid
      className={styles.containerBanner + " bg-black text-right"}
    >
      <Image
        src={hedragon.src}
        width={100}
        height={100}
        className={styles.imghedron}
      />

      <Image
        src={hedragon.src}
        width={100}
        height={100}
        className={styles.imghedron2}
      />

      <Container className={styles.subcontainer}>
        <Row>
          <Row className="pb-5">
            <h2 className={styles.h2crono}>WELCOME TO CRONO</h2>
          </Row>
          <Row className={"pb-5 " + styles.h1Style}>
            <h1>
              The Internet of <br /> Blockchains.
            </h1>
          </Row>
          <Row className="pb-5">
            <p>
              Cronos is an ever expanding ecosystem of connected <br /> apps and
              services, built for a decentralized future.
            </p>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}
