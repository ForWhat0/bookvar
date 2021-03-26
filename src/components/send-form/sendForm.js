import { PlanetMoveBorder } from "../planet/planet-move-on-border";
import { InputStyled } from "../input/input";
import { SendButton } from "../sendButton/sendButton";
import styled from "styled-components";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { LinearGradientText } from "../linear-gradient-text/linear-gradient-text";
import { Lines } from "../lines/lines";
import { device } from "../deviceSizes/deviceSizes";

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

const FormContainer = styled.div`
  background: url(/form-border.svg) no-repeat center center;
  background-size: contain;
  width: 945px;
  height: 546px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1150px) {
    width: 100%;
    height: 520px;
  }
  @media screen and (max-width: 1100px) {
    height: 510px;
  }
  @media screen and ${device.laptop} {
    background: unset;
    height: auto;
  }
`;

const Content = styled.div`
  width: 50%;
  @media screen and ${device.tablet} {
    width: 100%;
  }
`;

const TextAlign = styled.div`
  text-align: ${(props) => props.align};

  @media screen and ${device.mobileL} {
    text-align: center;
  }

  h1 {
    background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 54px;
    padding-top: 10px;

    @media screen and ${device.tablet} {
      font-size: 32px;
      line-height: 24px;
    }

    @media screen and ${device.mobileL} {
      font-size: 20px;
    }
  }

  span {
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    color: rgba(255, 255, 255, 0.8);
    padding-top: 20px;

    @media screen and ${device.tablet} {
      font-size: 24px;
      line-height: 20px;
    }

    @media screen and ${device.mobileL} {
      font-size: 16px;
    }
  }
`;

export const Form = () => {
  return (
    <AppSizeLayout>
      <TextAlign align="left">
        <h1>ОСТАВЬТЕ ЗАЯВКУ</h1>
      </TextAlign>
      <TextAlign align="right">
        <span>Мы найдем подходящее решение для Вашей школы</span>
      </TextAlign>
      <FormWrapper>
        <FormContainer>
          <PlanetMoveBorder form topPosition size={40} />
          <PlanetMoveBorder form size={80} />
          <Content>
            <InputStyled text={`Ім'я`} />
            <InputStyled text={`Телефон`} />
            <SendButton sendText="Отправить" />
          </Content>
        </FormContainer>
      </FormWrapper>
    </AppSizeLayout>
  );
};
