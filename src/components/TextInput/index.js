import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content, Input } from "./TextInput.style";

const TextInput = ({ label, placeHolder, setValue }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setValue(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [state, setValue]);

  return (
    <Wrapper>
      {label}
      <Content>
        <Input
          type="text"
          placeholder={placeHolder}
          onChange={(e) => setState(e.currentTarget.value)}
        />
      </Content>
    </Wrapper>
  );
};

export default TextInput;
