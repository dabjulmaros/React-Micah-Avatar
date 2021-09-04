import React, { useState } from "react";
import "./App.css";

// Components
import Canvas from "./components/Canvas";
import Controls from "./components/Controls";
import Footer from "./components/Footer";
function App() {
  const [url, setUrl] = useState("");
  return (
    <>
      <Canvas url={url} />
      <Controls setUrl={setUrl} />
      <Footer />
    </>
  );
}

export default App;
