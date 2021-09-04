import React from "react";
import { Wrapper, Content } from "./Footer.style";

const Footer = () => (
  <Wrapper className="footer">
    <Content>
      <span>
        {`Made possible thanks to: `}
        <a
          href="https://avatars.dicebear.com/"
          target="_blank"
          rel="noreferrer"
        >{`https://avatars.dicebear.com/`}</a>
      </span>
      <span>
        {`Documentation: `}
        <a
          href="https://avatars.dicebear.com/styles/micah"
          target="_blank"
          rel="noreferrer"
        >{`https://avatars.dicebear.com/styles/micah`}</a>
      </span>
    </Content>
  </Wrapper>
);

export default Footer;
