import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

export const Container = styled.div`
  margin: 40px 0 40px 0;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
`;

export const NumberOfPage = styled.li`
  cursor: pointer;
  color: ${(props) => (props.current ? "unset" : "white")};
  background: ${(props) =>
    props.current
      ? "linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);"
      : "unset"};
  -webkit-background-clip: ${(props) => (props.current ? "text" : "unset")};
  -webkit-text-fill-color: ${(props) =>
    props.current ? "transparent" : "unset"};
  list-style-type: none;
  margin: 0 15px 0 15px;
  font-weight: bold;
  font-size: 35px;
  line-height: 43px;
  transition: all 0.1s linear;

  &:hover {
    transform: scale(0.9);
  }

  @media screen and ${device.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
`;
export const Icon = styled.div`
  width: 97px;
  height: 83px;
  background: url(${(props) => props.icon}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  transition: all 0.1s linear;

  &:hover {
    transform: scale(0.9);
  }

  @media screen and ${device.tablet} {
    width: 44px;
    height: 33px;
  }
`;
export const Arrows = styled.div`
  display: block;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  right: ${(props) => props.right};
  left: ${(props) => props.left};

  span {
    margin: 0 20px 0 20px;
    color: ${(props) => props.color};
  }

  @media screen and ${device.laptop} {
    display: none;
  }
`;
