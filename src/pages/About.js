import React from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import maxPrepIcon from "../assets/images/icons/maxpreps-icon.svg";

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
        <div className="about-bg-img" />
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
              {" "}
              <span
                className="svg-icon-link"
                style={{
                  backgroundColor: "#e91d00",
                  backgroundImage: `url('${maxPrepIcon}')`,
                  backgroundSize: `contain`,
                  backgroundRepeat: `no-repeat`,
                }}
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 225">
                  <rect fill="#e91d00" width="225" height="225" />
                  <circle fill="#fff" cx="112.5" cy="81.5" r="9.5" />
                  <path
                    fill="#fff"
                    d="m127,111l19-62h-25l-5.041,20.498c5.213,1.505,9.041,6.311,9.041,12.002,0,6.893-5.607,12.5-12.5,12.5s-12.5-5.607-12.5-12.5c0-5.903,4.118-10.852,9.629-12.154l-5.629-20.346h-25l19,62-21,65h25l10.5-33.702,10.5,33.702h25l-21-65Z"
                  />
                </svg> */}
              </span>
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
