import { IconBackground } from "../icon/icon";
import { PlanetMoveBorder } from "../planet/planet-move-on-border";
import styled from "styled-components";
import { TitleForComponent } from "../titleForComponent/title";
import { device } from "../deviceSizes/deviceSizes";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import {buttonText, mainApproach} from "../../Lsi/lsi";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  grid-gap: 80px;
  justify-content: space-between;

  @media screen and (max-width: 1290px) {
    display: flex;
    flex-direction: column;
    grid-gap: unset;
  }
`;

const Global = styled.div`
  width: 100%;
  margin-left:unset;
  height: 554px;
  background: linear-gradient(251.35deg, #e8f2fd 0%, #c3cee9 100%);
  border-radius: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and ${device.laptop} {
    height: auto;
  }
  @media screen and ${device.tablet} {
  width: 80%;
  margin-left:10%;
  }
  @media screen and ${device.mobileL} {
  
    &:first-child {
      margin: 0 0 40px 5%;
    }
  width: 90%;
  margin-left: unset;
  margin: 0 0 0 5%;
  }
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
    @media screen and ${device.tablet} {
      width: 100%;
      font-size: 20px;
      line-height: 24px;
      margin: 0;
      height: auto;
      min-height: auto;
      padding: 0;
      text-align: center;
      margin: 40px 0 10px 0;
    }
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
    @media screen and ${device.tablet} {
      padding: 0;
      margin: 0;
      min-height: auto;
      margin-bottom: 40px;
      width: 50%;
      margin-left: 25%;
      font-size: 16px;
      line-height: 20px;
    }
    @media screen and ${device.mobileL} {
      width: 80%;
      margin-left: 10%;
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
const IconContainer = styled.div`
  width: 170px;
  height: 130px;
  z-index: 2;
  position: absolute;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};

  @media screen and ${device.tablet} {
    width: 80px;
    height: 80px;
    right: ${(props) => (props.right ? '-10px ': "unset")};
    left: ${(props) => (props.left ? '-10px' : "unset")};
    top: ${(props) => (props.right ? '-30px ': "unset")};
    bottom: ${(props) => (props.left ? '-30px' : "unset")};
  }
`;
export const Space = styled.div`
padding: 40px 0;
   @media screen and ${device.tablet} {
     padding: 20px 0;
  }
`
export const ButtonContainer = styled.div`
  margin:${props=>props.margin ? '60px 0' : '30px 0 0 0'};
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  
  a {
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  }
`;
const ButtonContainerr = styled.div`
 display: flex;
 margin-top: 40px;
justify-content: center;

@media screen and ${device.laptop} {
     margin-bottom: 40px;
     margin-top: unset;
  }

  button {
  cursor:pointer;
  padding:16px 30px;
  border:none;
 font-weight: 500;
font-size: 20px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: radial-gradient(233.93% 3285.08% at 52.55% 50%, #0367A9 0%, #2AF6FF 100%);
box-shadow: 0px 0px 10px 4px #02E2E4, 0px 0px 15px #00FFFF;
border-radius: 20px;
width: fit-content;
transition:all 0.1s ease-in-out;

&:hover {
transform:scale(1.1)
}

@media screen and ${device.tablet} {
       font-size: 16px;
line-height: 20px;
  }
@media screen and ${device.mobileL} {
       font-size: 14px;
line-height: 17px;
  }
}
  }
`;

const {firstTitle, secondTitle} = mainApproach
const { learnMore } = buttonText

export const MainApproach = ({ locale, textAr, textVr, titleAr, titleVr }) => {
  const titleGradient = `from 180deg at 56.08% 101.02%, #131C35 0deg, #2AF6FF 360deg`;
  const titleGradient2 = `from 179.83deg at 50% 50%,
      #2af6ff 0deg,
      #081843 50.63deg,
      #2af6ff 360deg`;
  return (
    <AppSizeLayout>
      <TitleForComponent>
        {firstTitle[locale]}
        <h1>2</h1>
        {secondTitle[locale]}
      </TitleForComponent>
      <Container>
        <Global margin={true} gradient={titleGradient}>
          <h1>{titleVr}</h1>
          <p>
            {textVr.length > 195 ? `${textVr.substring(0, 195)}...` : textVr}
          </p>
          <ButtonContainerr>
            <Link href='/Vr'>
              <button>{learnMore[locale]}</button>
            </Link>
          </ButtonContainerr>

          <IconContainer right="-70px" top="-20px">
            <IconBackground size='100%' background="/VrTopIconApproach.svg" />
          </IconContainer>

          <IconContainer left="-70px" bottom="-20px">
            <IconBackground size='100%' background="/key.svg" />
          </IconContainer>

          <PlanetMoveBorder topPosition={true} size={40} />
          <PlanetMoveBorder size={40} />
        </Global>

        <Global gradient={titleGradient2}>
          <h1>{titleAr}</h1>
          <p>
            {textAr.length > 195 ? `${textAr.substring(0, 195)}...` : textAr}
          </p>
          <ButtonContainerr>
            <Link href='/Ar'>
              <button>{learnMore[locale]}</button>
            </Link>
          </ButtonContainerr>

          <IconContainer right="-70px" top="-20px">
            <IconBackground size='100%' background="/ArIconApproach.svg" />
          </IconContainer>

          <PlanetMoveBorder topPosition={true} size={80} />
        </Global>
      </Container>
    </AppSizeLayout>
  );
};
