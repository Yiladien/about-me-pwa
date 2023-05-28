import React from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Twitter, Instagram, Facebook } from "react-bootstrap-icons";

const Media = () => {
  return (
    <section className="scroll-container p-0">
      <div className="page-container">
        <div className="content-container">
          <div className="d-block fs-1">
            <Row className="mb-3">
              <Col className="d-flex justify-content-center">
                <h1>Media</h1>
              </Col>
            </Row>
            <Row className="mb-3">
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
            <a
              className="twitter-timeline"
              data-width="300"
              data-dnt="true"
              data-theme="dark"
              href="https://twitter.com/MadisonOlguin21?ref_src=twsrc%5Etfw"
            >
              Tweets by MadisonOlguin21
            </a>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
            ></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
