import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content, Input } from "./Drop.style";

const Drop = ({ label, dropArr, setValue, useTimer, urlProp }) => {
  const [drop, setDrop] = useState("Select One");
  const [check, setCheck] = useState("Select One");
  const initial = useRef(true);
  const initialTimer = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    if (check === drop) return;
    initialTimer.current = false;

    setCheck(drop);
  }, [drop, check, setCheck]);

  useEffect(() => {
    if (initialTimer.current) return;
    initialTimer.current = false;

    if (useTimer) {
      const timer = setTimeout(() => {
        setValue(`&${urlProp}[]=${check}`);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setValue(check);
      return;
    }
  }, [check, setValue, urlProp, useTimer]);

  return (
    <Wrapper>
      {label}
      <Content>
        <Input
          onChange={(e) => setDrop(e.currentTarget.value)}
          defaultValue={{
            label: "Select One",
          }}
        >
          <option hidden>{"Select One"}</option>
          {dropArr.map((style) => (
            <option value={style} key={style}>
              {style}
            </option>
          ))}
        </Input>
      </Content>
    </Wrapper>
  );
};

export default Drop;
