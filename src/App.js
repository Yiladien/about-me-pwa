// import React, { useState } from "react";
import React, { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Share from "./pages/Share";
// import Example from "./pages/Example";

function App() {
  // const [viewHeight, setViewHeight] = useState(
  //   navigator.userAgent.indexOf("iPhone") === -1 ? 110 : 110
  // );

  return (
    // <div className="App" style={{ height: `${viewHeight}vh` }}>
    <div className="App">
      <div className="text-white">
        {/* <Home viewHeight={viewHeight} />
        <About viewHeight={viewHeight} />
        <Contact viewHeight={viewHeight} />
        <Media viewHeight={viewHeight} />
        <Share viewHeight={viewHeight} /> */}

        <Home />
        <About />
        <Contact />
        <Media />
        <Share />
        {/* <Example /> */}
      </div>
    </div>
  );
}

export default App;
