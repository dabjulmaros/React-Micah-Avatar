import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--textColor);
  font-size: var(--textSize);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;

  .show {
    height: 0px;
  }
  .true {
    background: var(--lightBack);
    ::before,
    ::after {
      background-color: var(--textColor);
      transform: translateX(1rem);
    }
  }
`;

export const Header = styled.h2`
  color: var(--textColor);
  font-weight: 400;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  height: calc(100%);
  transition: height 0.5s;
  overflow: hidden;
`;

export const Toggle = styled.span`
  cursor: pointer;
  width: 2.5rem;
  height: 1rem;
  margin-right: 2rem;
  background: var(--darkBack);
  position: relative;
  border-radius: 15% 15% 15% 15% / 50% 50% 50% 50%;

  ::before {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    left: 0rem;
    top: -0.2rem;
    background-position: center;
    background-color: var(--lightBack);
    border-radius: 50%;
    transition: transform 0.2s, background-color 0ms;
  }
  ::after {
    content: "";
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: -0.75rem;
    top: -1rem;
    background-position: center;
    background-color: var(--lightBack);
    opacity: 0;
    border-radius: 50%;
    transition: transform 0.2s, background-color 0ms;
  }
  :hover {
    ::after {
      opacity: 0.1;
    }
  }
`;
