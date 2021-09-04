import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--darkBack);
  color: var(--textColor);
  padding: 0.5rem;
  text-align: center;
`;

export const Content = styled.div`
  span {
    display: block;
  }
  a {
    color: var(--textColor);
  }
`;
