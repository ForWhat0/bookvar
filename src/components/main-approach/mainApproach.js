import { IconBackground } from "../leftComment/leftCommentStyLedComponents";
import { PlanetMoveBorder } from "../planet/planet-move-on-border";
import styled from "styled-components";
import { LinearGradientText } from "../linear-gradient-text/linear-gradient-text";
import {TitleForComponent} from "../titleForComponent/title";
import {StyledButton} from "../button/button";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  justify-content: space-between;
  width: 80%;
  margin-left: 10%;
`;

const Global = styled.div`
  width: 100%;
  height: 554px;
  background: linear-gradient(251.35deg, #e8f2fd 0%, #c3cee9 100%);
  border-radius: 40px;
  position: relative;
  display: flex;
  flex-direction: column;

  h1 {
    background: conic-gradient(${(props) => props.gradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 40px 0 0 40px;
    width: calc(100% - 140px);
    min-height: 160px;
    font-size: 45px;
    line-height: 55px;
    margin: 0;
  }

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    padding: 0 55px;
    color: #113a39;
    margin: 0;
    min-height: 192px;
  }
`;

const IconContainer = styled.div`
  width: 170px;
  height: 130px;
  position: absolute;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
`;



export const MainApproach = ({ approach }) => {
  const titleGradient = `from 180deg at 56.08% 101.02%, #131C35 0deg, #2AF6FF 360deg`;
  const titleGradient2 = `from 179.83deg at 50% 50%,
      #2af6ff 0deg,
      #081843 50.63deg,
      #2af6ff 360deg`;
  return (
    <>
        <TitleForComponent>
            Мы используем
            <h1>2</h1>
            подхода к закреплению полученных знаний на практике во время урока
        </TitleForComponent>
      <Container>
        {approach.map((item, index) => (
          <Global
            gradient={(index + 1) % 2 === 0 ? titleGradient : titleGradient2}
          >
            <h1>{item.title}</h1>
            <p>
              {item.text?.length > 195
                ? `${item.text.substring(0, 195)}...`
                : item.text}
            </p>
              <StyledButton text='Узнать подробнее'/>
            {item.topPhoto && (
              <IconContainer right="-70px" top="-20px">
                <IconBackground background={item.topPhoto} />
              </IconContainer>
            )}
            {item.bottomPhoto && (
              <IconContainer left="-70px" bottom="-20px">
                <IconBackground background={item.bottomPhoto} />
              </IconContainer>
            )}
            {(index + 1) % 2 === 0 ? (
              <>
                <PlanetMoveBorder topPosition={true} size={40} />
                <PlanetMoveBorder size={40} />
              </>
            ) : (
              <PlanetMoveBorder topPosition={true} size={80} />
            )}
          </Global>
        ))}
      </Container>
    </>
  );
};
