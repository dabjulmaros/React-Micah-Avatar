import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--textColor);
  font-size: var(--textSize);
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

export const Content = styled.div`
  display: flex;
  padding-left: 2rem;
  align-items: end;
  .color {
    width: 2rem;
    height: 2.8rem;
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  text-align: center;
  width: 10.5ch;
  height: 2rem;
  font-size: 2rem;
  padding: 0;
  color: white;
  background: var(--backColor);
  font-family: "Roboto mono";
  border: none;
  padding-bottom: 0.5rem;
  border-bottom: white solid 2px;
  outline: none;
`;
