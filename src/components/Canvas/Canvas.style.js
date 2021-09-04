import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.canvas`
  height: 400px;
  width: 400px;
  border: solid 1px var(--textColor);
  background: var(--lightBack);
`;
