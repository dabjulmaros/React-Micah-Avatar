import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  color: var(--textColor);
  font-size: var(--textSize);
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

export const Content = styled.div`
  padding-left: 2rem;
  min-width: 19.5ch;
`;

export const Input = styled.select`
  text-align-last: center;
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  color: white;
  background: var(--backColor);
  font-family: "Roboto mono";
  border: none;
  padding-bottom: 0.5rem;
  border-bottom: white solid 2px;
  outline: none;
`;
