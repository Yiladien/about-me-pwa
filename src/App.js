// import React, { useState } from "react";
import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Share from "./pages/Share";
import Save from "./pages/Save";
import TestPage from "./pages/TestPage";
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
          safariiOSUser: /(iPhone|iPod|iPad).*Mobile\/.*Safari\//i.test(
            navigator.userAgent
          ),
          userAgent: navigator.userAgent,
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
    <div className="App text-white">
      <Home />
      <About />
      <Contact />
      <Media />
      <Share />
      {pwaPrompt.launchMode !== "standalone" && (
        <Save
          safariiOSUser={pwaPrompt.safariiOSUser}
          promptEvent={promptEvent}
        />
      )}
      <TestPage
        safariiOSUser={pwaPrompt.safariiOSUser}
        pwaPrompt={pwaPrompt}
        page={1}
      />
      <TestPage
        safariiOSUser={pwaPrompt.safariiOSUser}
        pwaPrompt={pwaPrompt}
        page={2}
      />
      <TestPage
        safariiOSUser={pwaPrompt.safariiOSUser}
        pwaPrompt={pwaPrompt}
        page={3}
      />
      <TestPage
        safariiOSUser={pwaPrompt.safariiOSUser}
        pwaPrompt={pwaPrompt}
        page={4}
      />
      <TestPage
        safariiOSUser={pwaPrompt.safariiOSUser}
        pwaPrompt={pwaPrompt}
        page={5}
      />
      <TestPage
        safariiOSUser={pwaPrompt.safariiOSUser}
        pwaPrompt={pwaPrompt}
        page={6}
      />
      <TestPage
        safariiOSUser={pwaPrompt.safariiOSUser}
        pwaPrompt={pwaPrompt}
        page={7}
      />
    </div>
  );
}

export default App;
