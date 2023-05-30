import React, { useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

import {
  Envelope,
  EnvelopeOpen,
  Phone,
  PhoneLandscape,
  PhoneVibrate,
  PhoneFlip,
  Telephone,
  TelephoneOutbound,
  Messenger,
} from "react-bootstrap-icons";

const Contact = () => {
  const [hovered, setHovered] = useState({});

  const toggleHovered = (event) => {
    console.log(event.target.attributes.name.value);
    console.dir(event.target);
    console.log(Object.keys(event.target));

    const name = event.target.attributes.name.value;
    setHovered({ [name]: !hovered[name] });
  };

  console.log(hovered);
  return (
    <section className="scroll-container">
      <div className="page-container">
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <span
              className="icon-button"
              onMouseEnter={toggleHovered}
              onMouseLeave={toggleHovered}
              name="email"
            >
              {hovered.email ? (
                <EnvelopeOpen style={{ transform: "translateY(-12.5%)" }} />
              ) : (
                <Envelope />
              )}
            </span>
          </Col>
          <Col className="d-flex justify-content-center">
            <span
              className="icon-button"
              onMouseEnter={toggleHovered}
              onMouseLeave={toggleHovered}
              name="telephone"
            >
              {hovered.telephone ? <TelephoneOutbound /> : <Telephone />}
            </span>
          </Col>
          <Col className="d-flex justify-content-center">
            <span
              className="icon-button"
              onMouseEnter={toggleHovered}
              onMouseLeave={toggleHovered}
              name="messenger"
            >
              {hovered.messenger ? (
                <Messenger style={{ transform: "rotate(10deg)" }} />
              ) : (
                <Messenger />
              )}
            </span>
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
    </section>
  );
};

export default Contact;
