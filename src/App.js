import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
// import Example from "./pages/Example";

function App() {
  return (
    <div className="App">
      <div className="bg-dark text-white">
        <Home />
        <About />
        <Contact />
        <Media />
        {/* <Example /> */}
      </div>
    </div>
  );
}

export default App;
