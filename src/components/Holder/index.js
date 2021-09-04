import React, { useState } from "react";

import { Wrapper, Header, Icon, Content } from "./Holder.style";

const Holder = ({ header, status, icon, children }) => {
  const [state, setState] = useState(status);

  return (
    <Wrapper>
      <Header onClick={() => setState(!state)}>
        {header}
        <Icon className={`material-icons ${state ? "rotate" : ""}`}>
          {icon}
        </Icon>
      </Header>
      <Content className={state ? "show" : null}>{children}</Content>
    </Wrapper>
  );
};

export default Holder;
