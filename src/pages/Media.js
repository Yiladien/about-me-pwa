import React from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Twitter, Instagram, Facebook } from "react-bootstrap-icons";

const Media = () => {
  return (
    <section className="scroll-container p-0">
      <div className="page-container">
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <h1>Media</h1>
          </Col>
        </Row>
        <Row className="mb-3 fs-1 pb-5">
          <Col className="d-flex justify-content-center">
            <a
              className="text-reset"
              href="https://twitter.com/MadisonOlguin21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </Col>
          <Col className="d-flex justify-content-center">
            <a
              className="text-reset"
              href="https://twitter.com/MadisonOlguin21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </Col>
          <Col className="d-flex justify-content-center">
            <a
              className="text-reset"
              href="https://twitter.com/MadisonOlguin21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
        </Row>
      </div>
    </section>
  );
};

export default Media;
