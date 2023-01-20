import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./css/Description.module.css";
//Images
import ethericon from "../../public/images/ethericon.svg";
import Link from "next/link";

export default function DescriptionHub() {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Row>
            <Col>
              <Row>
                <Image
                  src={ethericon}
                  width={30}
                  height={30}
                  objectFit="cover"
                  className={styles.imageEther}
                />
              </Row>
              <Row>
                <Row>
                  <h3>Marketplace</h3>
                </Row>
                <Row>
                  <p>
                    Set to operate a next-gen decentralized exchange, swapping
                    digital assets from across the Interchain, with very low
                    fees and instant transaction confirmation.
                  </p>
                </Row>
              </Row>
            </Col>
            <Col>
              <Row>
                <Image
                  src={ethericon}
                  width={30}
                  height={30}
                  objectFit="cover"
                  className={styles.imageEther}
                />
              </Row>
              <Row>
                <Row>
                  <h3>Security provider</h3>
                </Row>
                <Row>
                  <p>
                    With the upcoming Interchain Security feature, HEDRON will
                    soon be securing many chains, in exchange for additional
                    staking rewards.
                  </p>
                </Row>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Image
                  src={ethericon}
                  width={30}
                  height={30}
                  objectFit="cover"
                  className={styles.imageEther}
                />
              </Row>
              <Row>
                <Row>
                  <h3>Router</h3>
                </Row>
                <Row>
                  <p>
                    With the upcoming Interchain Security feature, HEDRON will
                    soon be securing many chains, in exchange for additional
                    staking rewards.
                  </p>
                </Row>
              </Row>
            </Col>
            <Col>
              <Row>
                <Image
                  src={ethericon}
                  width={30}
                  height={30}
                  objectFit="cover"
                  className={styles.imageEther}
                />
              </Row>
              <Row>
                <Row>
                  <h3>Custodian</h3>
                </Row>
                <Row>
                  <p>
                    With the upcoming Interchain Security feature, HEDRON will
                    soon be securing many chains, in exchange for additional
                    staking rewards.
                  </p>
                </Row>
              </Row>
            </Col>
          </Row>
          <Row>
            <Link href="/#">Cosmos Hub</Link>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}
