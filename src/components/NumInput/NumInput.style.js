import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--textColor);
  font-size: var(--textSize);
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

export const Label = styled.span`
  display: flex;
  padding-left: 1rem;
  align-items: baseline;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  height: 0.5rem;
  width: 11rem;
  margin-top: 1.3rem;
  margin-left: 1rem;
  top: 5px;
  position: relative;
  border-radius: 5px;
  background: var(--textColor);
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  :hover {
    opacity: 1;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #babac0;
    cursor: pointer;
  }
`;

export const Ticker = styled.input`
  width: 3rem;
  --webkit-appearance: none;
  text-align: center;
  height: 2rem;
  font-size: 2rem;
  padding: 0;
  color: white;
  background: var(--backColor);
  font-family: "Roboto mono";
  border: none;
  padding-bottom: 0.5rem;
  border-bottom: white solid 2px;
  margin: 0 0 1rem 1rem;
  outline: none;

  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
