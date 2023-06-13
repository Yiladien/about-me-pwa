import React, { useState } from "react";

//bootstrap
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

import qrcode from "../assets/images/qrcode/qrcode-url-www.madisonolguin.com.png";

const Share = ({ marginTop, marginBottom }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section
      className="scroll-container"
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    >
      <div className="page-container d-flex flex-column align-content-center pb-2 w-100 h-100 ">
        <div className="d-flex  justify-content-center flex-grow-0">
          <h1 className="mb-1">Share</h1>
        </div>

        <div className="qrcode-box flex-grow-1 d-flex flex-column align-items-center justify-content-center position-relative p-5">
          <Image
            style={{ boxShadow: "0px 0px 0px 2px green" }}
            className="click-pointer"
            src={qrcode}
            onClick={handleModal}
          />
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
