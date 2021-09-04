import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Header, Content, Toggle } from "./ToggleDrop.style";

import ColorInput from "../ColorInput";
import Drop from "../Drop";

const ToggleDrop = ({
  label,
  showToggle,
  defaultToggle,
  dropArr,
  urlProps,
  LabelStyle,
  colorLabel,
  colorPH,
  colorDefault,
  colorArr,
  setState,
}) => {
  const [color, colorSet] = useState(colorDefault);
  const [checkC, setCheckC] = useState(colorDefault);
  const [drop, setDrop] = useState("Select One");
  const [checkD, setCheckD] = useState("Select One");
  const [toggle, setToggle] = useState(defaultToggle);
  const [urlChunk, setUrl] = useState("");
  const initial = useRef(true);
  const initialTimer = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    if (toggle) if (checkD === drop && checkC === color) return;
    initialTimer.current = false;

    if (checkD !== drop) setCheckD(drop);
    if (checkC !== color) setCheckD(color);

    let tempUrlChunk = "";
    let count = 0;
    let propsCount = 0;
    const propsArr = [drop, color];
    if (toggle) {
      if (showToggle) {
        tempUrlChunk += `&${[urlProps[0]]}[]=100`;
        count++;
      }
      for (var x = count; x < urlProps.length; x++) {
        tempUrlChunk += `&${[urlProps[x]]}[]=${propsArr[propsCount]}`;
        propsCount++;
      }
      setUrl(tempUrlChunk);
    } else setUrl("");
    return;
  }, [
    color,
    drop,
    checkC,
    checkD,
    setCheckC,
    setCheckD,
    toggle,
    setUrl,
    showToggle,
    urlProps,
  ]);

  useEffect(() => {
    if (initialTimer.current) {
      return;
    }
    initialTimer.current = true;
    const timer = setTimeout(() => {
      setState(urlChunk);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [urlChunk, setState]);
  return (
    <Wrapper>
      <Header>
        {label}
        {showToggle ? (
          <Toggle
            onClick={() => setToggle(!toggle)}
            className={toggle ? "true" : ""}
          />
        ) : null}
      </Header>
      <Content className={toggle ? "" : "show"}>
        <Drop
          label={LabelStyle}
          dropArr={dropArr}
          setValue={setDrop}
          useTimer={false}
        />
        <ColorInput
          label={colorLabel}
          placeHolder={colorPH}
          defaultVal={colorDefault}
          allowedValues={colorArr}
          setValue={colorSet}
          useTimer={false}
        />
      </Content>
    </Wrapper>
  );
};
export default ToggleDrop;
