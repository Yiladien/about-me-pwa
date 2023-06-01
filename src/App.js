// import React, { useState } from "react";
import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Share from "./pages/Share";
import Save from "./pages/Save";
// import ViewHeightForm from "./components/ViewHeightForm";
// import Example from "./pages/Example";

//to store the beoreinstallPrompt event
let promptEvent = null;

function App() {
  const [pwaPrompt, setPwaPrompt] = useState({
    displayMode: window.matchMedia("(display-mode: standalone)").matches,
    documentReferrer: document.referrer,
    navigatorStandalone: navigator.standalone,
    launchMode: "",
    installed: false,
    showInstall: true,
    beforeinstallEvent: null,
    safariiOSUser: /^((?!chrome|android|Mac).)*Version\/[\d.]+.*Safari/i.test(
      navigator.userAgent
    ),
  });

  useEffect(() => {
    window
      .matchMedia("(display-mode: standalone)")
      .addEventListener("change", (evt) => {
        console.log("display mode change fired");
        if (evt.matches) {
          console.log("evt matches");
          setPwaPrompt({
            ...pwaPrompt,
            displayMode: window.matchMedia("(display-mode: standalone)")
              .matches,
            documentReferrer: document.referrer,
            navigatorStandalone: navigator.standalone,
            launchMode: "standalone",
            installed: true,
            showInstall: false,
            safariiOSUser:
              /^((?!chrome|android|Mac).)*Version\/[\d.]+.*Safari/i.test(
                navigator.userAgent
              ),
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
        promptEvent = event;

        return setPwaPrompt({
          ...pwaPrompt,
          displayMode: window.matchMedia("(display-mode: standalone)").matches,
          documentReferrer: document.referrer,
          navigatorStandalone: navigator.standalone,
          launchMode: getPWADisplayMode(),
          installed: false,
          showInstall: true,
          safariiOSUser:
            /^((?!chrome|android|Mac).)*Version\/[\d.]+.*Safari/i.test(
              navigator.userAgent
            ),
        });
      });
    }
  }, [pwaPrompt.showInstall, pwaPrompt.installed]);

  window.addEventListener("appinstalled", () => {
    console.log("appinstalled fired");

    promptEvent = null;

    setPwaPrompt({
      ...pwaPrompt,
      installed: true,
      showInstall: false,
    });
  });

  console.log(pwaPrompt);

  return (
    <div className="App">
      <div className="text-white">
        <Home />
        <About />
        <Contact />
        <Media />
        <Share />
        {pwaPrompt.launchMode !== "standalone" && (
          <Save
            safariiOSUser={pwaPrompt.safariiOSUser}
            promptEvent={promptEvent}
            pwaPrompt={pwaPrompt}
          />
        )}
      </div>
    </div>
  );
}

export default App;
