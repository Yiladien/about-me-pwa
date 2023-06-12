import React, { useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

import qrcode from "../assets/images/qrcode/qrcode-url-www.madisonolguin.com.png";

const Share = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="scroll-container">
      <div className="page-container d-flex flex-column align-content-center pb-2">
        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className="mb-1">Share</h1>
          </Col>
        </Row>
        <div className="qrcode-box d-flex flex-column align-content-center justify-content-center w-100 h-100 flex-grow-0 pb-5 ps-5 pe-5">
          <div className="d-inline-flex align-content-center justify-content-center mw-100 mh-100">
            <Image
              className="click-pointer mh-100 mw-100"
              src={qrcode}
              onClick={handleModal}
            />
          </div>
        </div>
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
          onClick={handleModal}
        >
          <Image className="max-vh-100 rounded-4" src={qrcode} fluid />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Share;
