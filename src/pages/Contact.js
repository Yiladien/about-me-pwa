import React from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Envelope } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <section className="scroll-container p-0">
      <div className="page-container">
        <div className="content-container">
          <div className="d-block fs-1">
            <Row className="mb-3">
              <Col className="d-flex justify-content-center">
                <h1>Contact Me</h1>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="d-flex justify-content-center">
                <Button
                  size="sm"
                  className="fs-3"
                  variant="secondary"
                  href="mailto:"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Envelope />
                </Button>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="d-flex justify-content-center">
                <a
                  href="https://twitter.com/MadisonOlguin21?ref_src=twsrc%5Etfw"
                  className="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow @MadisonOlguin21
                </a>
                {/* <script
              async
              src="https://platform.twitter.com/widgets.js"
            ></script> */}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
