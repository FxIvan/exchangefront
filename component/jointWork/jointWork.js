import { Col, Container, Row } from "react-bootstrap";
import { AiFillCodeSandboxSquare } from 'react-icons/ai';
import {GrValidate , GrGroup} from 'react-icons/gr';

export default function JointWork() {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Row>
            <div>
              <h2>Join the network.</h2>
            </div>
          </Row>
          <Row>
            <Col>
              <Row>
                <h4>CONNECT</h4>
              </Row>
              <Row>
                <h3>Connect chains</h3>
              </Row>
              <Row>
                <p>
                  Grow the economy of your chain by connecting to Cronos Hub
                  services using IBC protocol.
                </p>
              </Row>
              <Row><AiFillCodeSandboxSquare/></Row>
            </Col>
            <Col>
              <Row>
                <h4>INTEGRATE</h4>
              </Row>
              <Row>
                <h3>Provide services</h3>
              </Row>
              <Row>
                <p>
                  Get support to bring users to Cronos by providing services
                  such as exchanges, wallets and more.
                </p>
              </Row>
              <Row><GrGroup/></Row>
            </Col>
            <Col>
              <Row>
                <h4>VALIDATE</h4>
              </Row>
              <Row>
                <h3>Validator level</h3>
              </Row>
              <Row>
                <p>
                  Join the ranks of trusted decentralized validator operators in
                  the network and help secure the interchain.{" "}
                </p>
              </Row>
              <Row>
              <GrValidate/>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}
