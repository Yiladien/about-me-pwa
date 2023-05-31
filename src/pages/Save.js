import React, { useEffect, useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

//bootstrap-icons
import { Download } from "react-bootstrap-icons";

import qrcode from "../assets/images/qrcode/qrcode-url-www.madisonolguin.com.png";

//to store the beoreinstallPrompt event
let promptEvent = null;

const Save = () => {
  const [pwaPrompt, setPwaPrompt] = useState({
    launchMode: "",
    installed: false,
    showInstall: true,
    beforeinstallEvent: undefined,
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(display-mode: standalone)")
      .addEventListener("change", (evt) => {
        console.log("display mode change fired");
        let displayMode = "browser";
        if (evt.matches) {
          console.log("evt matches");
          setPwaPrompt({
            ...pwaPrompt,
            launchMode: "standalone",
            installed: true,
            showInstall: false,
          });
        }
      });
  }, []);

  useEffect(() => {
    const getPWADisplayMode = () => {
      const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;
      if (document.referrer.startsWith("android-app://")) {
        return "twa";
      } else if (navigator.standalone || isStandalone) {
        return "standalone";
      }

      return "browser";
    };

    if (pwaPrompt.showInstall || pwaPrompt.installed) {
      console.log("beforeinstallPrompt true");
      window.addEventListener("beforeinstallprompt", (event) => {
        console.log("beforeinstallPrompt fired");
        event.preventDefault();
        console.log(event);
        promptEvent = event;

        return setPwaPrompt({
          ...pwaPrompt,
          launchMode: getPWADisplayMode(),
          installed: false,
          showInstall: true,
        });
      });
    }
  }, [pwaPrompt.showInstall, pwaPrompt.installed]);

  const handleInstallClick = async (e1) => {
    console.log("handleInstallClick");
    e1.preventDefault();
    promptEvent.prompt();

    const { outcome } = await promptEvent.userChoice;
    console.log(outcome);

    promptEvent = null;

    window.addEventListener("appinstalled", () => {
      console.log("appinstalled fired");

      promptEvent = null;

      setPwaPrompt({
        ...pwaPrompt,
        installed: true,
        showInstall: false,
      });
    });
  };

  console.log(pwaPrompt);

  return (
    <section className="scroll-container">
      <div className="page-container">
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <h1>Save</h1>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col className="d-flex justify-content-center">
            {pwaPrompt.showInstall ? (
              <div>
                <p className="handwritten-text fs-2">
                  Save my app to your device.
                </p>
              </div>
            ) : null}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            {pwaPrompt.showInstall ? (
              <Button
                id="installButton"
                name="installButton"
                variant="secondary"
                onClick={handleInstallClick}
              >
                Install {` `}
                <Download />
              </Button>
            ) : null}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Save;
