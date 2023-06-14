import React from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Twitter, Instagram, Facebook } from "react-bootstrap-icons";

import { motion } from "framer-motion";

const Media = ({ paddingTop, paddingBottom }) => {
  return (
    <section
      className="scroll-container"
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
    >
      <div className="page-container">
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <h1>Media</h1>
          </Col>
        </Row>
        <Row className="mb-3 fs-1 pb-5">
          <Col className="d-flex justify-content-center">
            <motion.div
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                className="text-reset"
                href="https://twitter.com/MadisonOlguin21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </motion.div>
          </Col>
          <Col className="d-flex justify-content-center">
            <motion.div
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                className="text-reset"
                href="https://twitter.com/MadisonOlguin21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </motion.div>
          </Col>
          <Col className="d-flex justify-content-center">
            <motion.div
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                className="text-reset"
                href="https://twitter.com/MadisonOlguin21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </motion.div>
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
