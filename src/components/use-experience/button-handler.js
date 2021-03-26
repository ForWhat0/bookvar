import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

const Container = styled.button`
  opacity: ${(props) => props.opacity};
  background: rgba(0, 255, 255, 0.5);
  border: unset;
  border-radius: 20px;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin: 0 5px 5px 0;
  cursor: pointer;

  @media screen and ${device.laptop} {
    font-size: 16px;
    line-height: 20px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding};
  transition: transform 0.1s linear;

  &:hover {
    transform: scale(0.9);
  }

  @media screen and ${device.tablet} {
    padding: ${(props) =>
      props.padding === "12px 30px" ? "12px 24px" : "8px 13px"};
  }
  @media screen and ${device.mobileL} {
    padding: ${(props) =>
      props.padding === "12px 30px" ? "12px 24px" : "8px 13px"};
  }
`;
const First = styled.div`
  background: ${(props) => props.background};
  background-size: contain;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;

  @media screen and ${device.laptop} {
    width: ${(props) => props.size === "40px" && "30px"};
    height: ${(props) => props.size === "40px" && "30px"};
  }
`;
const Second = styled.div`
  padding-left: 10px;

  @media screen and ${device.tablet} {
    display: none;
  }
`;

export const ButtonHandler = ({ type, classNum, icon, less, opacity, onClick }) => {
  return (
    <Container opacity={opacity ? "1" : "0.5"} onClick={onClick}>
      <ContentWrapper padding={icon ? "8px 10px" : "12px 30px"}>
        <First
          background={icon ? `url(${icon}) center center no-repeat` : "unset"}
          size={icon ? "40px" : "auto"}
        >
          {type ? type : classNum && classNum}
        </First>
        {classNum ? <Second>класс</Second> : less && <Second>{less}</Second>}
      </ContentWrapper>
    </Container>
  );
};
