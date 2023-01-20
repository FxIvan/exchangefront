import {Col, Container, Row } from "react-bootstrap";
import styles from "./css/Banner.module.css";

export default function ContentBanner() {
  return (
    <div className={styles.containerBanner}>
      <Col md={4}><h1>Hola</h1></Col>
      <Col md={4}> <h1>Hola</h1></Col>
      <Col md={4}> <h1>Hola</h1></Col>
    </div>
  );
}
