import styled from "styled-components";

export const Wrapper = styled.div`
  .show {
    height: 0px;
  }
  .rotate {
    transform: rotate(90deg);
  }
`;

export const Header = styled.h1`
  color: var(--textColor);
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.span`
  width: 50px;
  height: 50px;
  font-size: 50px;
  position: relative;
  top: -5px;
  transition: transform 0.5s;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  height: calc(100%);
  transition: height 0.5s;
  overflow: hidden;
`;
