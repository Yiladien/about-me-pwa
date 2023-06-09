import React, { useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

import qrcode from "../assets/images/qrcode/qrcode-url-www.madisonolguin.com.png";

const Share = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="scroll-container">
      <div className="page-container d-flex flex-column align-content-center">
        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className="mb-1">Share</h1>
          </Col>
        </Row>
        <Row className="qrcode-box flex-fill align-content-center justify-content-center pb-5">
          {/* <Col xs={8} md={4} xl={2}> */}

          <Col
            xs={8}
            md={4}
            xl={2}
            className="d-flex align-content-center justify-content-center pb-3"
          >
            <Image
              className="click-pointer"
              fluid
              src={qrcode}
              onClick={() => setShowModal(!showModal)}
            />
          </Col>
        </Row>
      </div>
      <Modal
        className="qrcode-modal"
        centered
        fullscreen
        show={showModal}
        contentClassName="bg-transparent"
      >
        <Modal.Body
          className="p-0 text-center bg-dark bg-opacity-10 d-flex align-items-center justify-content-center"
          onClick={() => setShowModal(!showModal)}
        >
          <Image className="max-vh-100 rounded-4" src={qrcode} fluid />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Share;
