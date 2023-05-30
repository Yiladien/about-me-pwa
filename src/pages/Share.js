import React, { useEffect, useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//bootstrap-icons
import { Download } from "react-bootstrap-icons";
let promptEvent;
const Share = () => {
  const [installPrompt, setInstallPrompt] = useState({
    installed: false,
    showInstall: true,
    beforeinstallEvent: undefined,
  });

  console.log(promptEvent);

  useEffect(() => {
    if (installPrompt.showInstall || installPrompt.installed) {
      console.log("beforeinstallPrompt true");
      window.addEventListener("beforeinstallprompt", (event) => {
        console.log("beforeinstallPrompt fired");
        event.preventDefault();
        console.log(event);
        promptEvent = event;

        return setInstallPrompt({
          ...installPrompt,
          installed: false,
          showInstall: true,
        });
      });
    }
  }, [installPrompt.showInstall, installPrompt.installed]);

  const handleInstallClick = async (e1) => {
    console.log("handleInstallClick");
    e1.preventDefault();
    promptEvent.prompt();

    const { outcome } = await promptEvent.userChoice;
    console.log(outcome);

    promptEvent = null;

    window.addEventListener("appinstalled", () => {
      console.log("appinstalled fired");
      setInstallPrompt({
        ...installPrompt,
        installed: true,
        showInstall: false,
      });
    });
  };

  return (
    <section className="scroll-container">
      <div className="page-container">
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <h1>Share</h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            {installPrompt.showInstall ? (
              <Button
                id="installButton"
                name="installButton"
                variant="secondary"
                onClick={handleInstallClick}
              >
                <Download />
              </Button>
            ) : (
              <Download />
            )}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Share;
