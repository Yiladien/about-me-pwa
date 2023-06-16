import React from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import maxPrepIcon from "../assets/images/icons/maxpreps-icon.svg";

import { motion } from "framer-motion";

const About = ({ paddingTop, paddingBottom }) => {
  return (
    <section
      className="scroll-container"
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
    >
      <div className="page-container pt-5">
        {/* background */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ amount: 0.5 }}
          transition={{
            opacity: {
              duration: 3.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          className="about-bg-img"
        />

        {/* content */}
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <a
              alt="maxpreps-link"
              href="https://www.maxpreps.com/tx/san-antonio/antonian-prep-apaches/athletes/madison-olguin/?careerid=flf7tv0sp6144"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="svg-icon-link"
                style={{
                  backgroundColor: "#e91d00",
                  backgroundImage: `url('${maxPrepIcon}')`,
                  backgroundSize: `contain`,
                  backgroundRepeat: `no-repeat`,
                }}
              ></span>
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
