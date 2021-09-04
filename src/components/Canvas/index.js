import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content } from "./Canvas.style";

const Canvas = ({ url }) => {
  const [state, setState] = useState("");
  const canvasRef = useRef(null);
  const initial = useRef(true);
  const initialTimer = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    loadImage("./assets/loading.svg");
    setState(url);
  }, [url, state, setState]);

  useEffect(() => {
    if (initialTimer.current) {
      initialTimer.current = false;
      return;
    }
    const timer = setTimeout(() => {
      loadImage(state);
    }, 750);
    return () => clearTimeout(timer);
  }, [state]);

  return (
    <Wrapper>
      <Content ref={canvasRef} width="400" height="400" />
    </Wrapper>
  );

  function loadImage(imageUrl) {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var img = new Image();
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    img.src = imageUrl;
  }
};

export default Canvas;
