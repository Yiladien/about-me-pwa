import React, { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
// import Example from "./pages/Example";

function App() {
  const [viewHeight, setViewHeight] = useState(
    navigator.userAgent.indexOf("iPhone") === -1 ? 110 : 110
  );

  return (
    <div
      className="App bg-dark text-white"
      style={{ height: `${viewHeight}vh` }}
    >
      <div className="bg-dark text-white">
        <Home viewHeight={viewHeight} />
        <About viewHeight={viewHeight} />
        <Contact viewHeight={viewHeight} />
        <Media viewHeight={viewHeight} />
        {/* <Example /> */}
      </div>
    </div>
  );
}

export default App;
