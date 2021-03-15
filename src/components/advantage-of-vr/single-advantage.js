import styled from "styled-components";
import { LinearGradientText } from "../linear-gradient-text/linear-gradient-text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor:pointer;
`;

const Elliplse = styled.div`
  width: 180px;
  position: relative;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ElliplseWrapper = styled.div`
  background: url(/ellipse-border.svg) center center no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s ease-in-out;
  position: absolute;

  ${Container}:hover & {
    transform: rotate(-360deg);
  }
`;
const Icon = styled.div`
  background: url(${(props) => props.src}) center center no-repeat;
  background-size: contain;
  width: 50%;
  height: 50%;
  position: relative;
  transition: transform 1s ease-in-out;
  
  ${Container}:hover & {
    transform: scale(1.1);
  }
`;
const Text = styled.div`
  padding-top: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

export const SingleAdvantage = ({ icon, title, text }) => {
  return (
    <Container>
      <Elliplse>
        <ElliplseWrapper />
        <Icon src={icon} />
      </Elliplse>
      <LinearGradientText text={title} size="25px" />
      <Text>{text}</Text>
    </Container>
  );
};
