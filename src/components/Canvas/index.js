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

    fetch(imageUrl).then(resp=>resp.text()).then(text=>{
      let parser = new DOMParser();
      let document = parser.parseFromString(text,'text/xml');
      
      //base 64 econding and dimmesion attributes needed for firefox
      let svg = document.querySelector('svg');
      console.log(svg)
      svg.setAttribute('width', '400px');
      svg.setAttribute('height','400px');

      let base64 = 'data:image/svg+xml;base64,' + btoa(new XMLSerializer().serializeToString(svg));
      
      let img = new Image();

      img.onload = function () {
        context.drawImage(img, 0, 0);
      }
      img.src = base64;

    });
    
  }
};

export default Canvas;
