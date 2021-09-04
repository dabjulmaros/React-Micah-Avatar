import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Label, Slider, Ticker } from "./NumInput.style";

const NumInput = ({ text, prop1, prop2, prop3, urlProp, setValue }) => {
  const [rangeVal, setRange] = useState(prop1);
  const [numVal, setNum] = useState(prop1);
  const [checkVal, setCheck] = useState(0);
  const initial = useRef(true);
  const initialTimer = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    if (checkVal === numVal && checkVal === rangeVal) return;
    initialTimer.current = false;

    if (checkVal !== numVal) {
      setRange(numVal);
      setCheck(numVal);
    }
    if (checkVal !== rangeVal) {
      setNum(rangeVal);
      setCheck(rangeVal);
    }
    return;
  }, [rangeVal, numVal, checkVal]);

  useEffect(() => {
    if (initialTimer.current) return;
    initialTimer.current = true;

    const timer = setTimeout(() => {
      setValue(`&${urlProp}[]=${checkVal}`);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [checkVal, setValue, urlProp]);

  return (
    <Wrapper>
      {text}
      <Label>
        <Slider
          type="range"
          min={prop2}
          max={prop3}
          value={rangeVal}
          onChange={(e) => setRange(e.currentTarget.value)}
        />
        <Ticker
          type="number"
          min={prop2}
          max={prop3}
          value={numVal}
          onChange={(e) => setNum(e.currentTarget.value)}
        />
      </Label>
    </Wrapper>
  );
};

export default NumInput;
