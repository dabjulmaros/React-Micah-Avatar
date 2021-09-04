import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content, Input } from "./ColorInput.style";

const ColorInput = ({
  label,
  placeHolder,
  defaultVal,
  allowedValues,
  setValue,
  useTimer,
  urlProp,
}) => {
  const [state, setState] = useState(defaultVal);
  const [stateC, setStateC] = useState("");
  const [check, setCheck] = useState(defaultVal);
  const [checkC, setCheckC] = useState(defaultVal);
  const initial = useRef(true);
  const initialTimer = useRef(true);
  const colorRef = useRef(null);

  useEffect(() => {
    //Prevents initial render
    if (initial.current) {
      initial.current = false;
      return;
    }
    //returns if value is unchanged
    if (check === state && checkC === stateC) return;

    //allows setting the value
    initialTimer.current = false;

    //sets the correct value to check
    if (checkC !== stateC) {
      setState(stateC);
      setCheckC(stateC);
    }
    if (check !== state) {
      setCheck(state);
    }
    return;
  }, [stateC, state, check, checkC]);

  //sends the value to the controls
  useEffect(() => {
    if (initialTimer.current) {
      return;
    }
    initialTimer.current = true;

    let returnVal = "";
    if (allowedValues.includes(state)) {
      returnVal = state;
    } else if (state === "") returnVal = defaultVal;
    else returnVal = colorRef.current.value.replace("#", "%23");

    if (useTimer) {
      const timer = setTimeout(() => {
        setValue(`&${urlProp}[]=${returnVal}`);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setValue(returnVal);
      return;
    }
  }, [state, defaultVal, setValue, allowedValues, useTimer, urlProp]);

  return (
    <Wrapper>
      {label}
      <Content>
        <Input
          type="text"
          placeholder={placeHolder}
          onClick={(e) => setState("")}
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
          list={`${label.replace(" ", "-")}dataList`}
        />
        <Input
          type="color"
          className="color"
          onChange={(e) => setStateC(e.currentTarget.value)}
          value={stateC}
          ref={colorRef}
        />
      </Content>
      <datalist id={`${label.replace(" ", "-")}dataList`}>
        {allowedValues.map((option) => (
          <option value={option} key={option} />
        ))}
      </datalist>
    </Wrapper>
  );
};

export default ColorInput;
