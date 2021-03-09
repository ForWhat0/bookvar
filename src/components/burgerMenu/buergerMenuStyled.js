import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

export const StyledBurger = styled.button`
  @media screen and ${device.laptop} {
    display: flex;
  }
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: none;
  height: 30px;
  width: 30px;
  &:focus {
    outline: none;
  }

  div {
    margin-top: ${({ open }) => (open ? "5px" : "3px")};
    width: 30px;
    height: 6px;
    background: linear-gradient(
      90deg,
      #00f2fe 0%,
      #03effe 2.1%,
      #24d2fe 29.3%,
      #3cbdfe 55.4%,
      #4ab0fe 79.6%,
      #4facfe 100%
    );
    border-radius: 10px;
    transition: all 0.5s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      right: ${({ open }) => (open ? "-3px" : "unset")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      right: ${({ open }) => (open ? "-3px" : "unset")};
    }
  }
`;
