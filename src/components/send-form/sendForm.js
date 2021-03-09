import { PlanetMoveBorder } from "../planet/planet-move-on-border";
import { InputStyled } from "../input/input";
import { SendButton } from "../sendButton/sendButton";
import styled from "styled-components";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { LinearGradientText } from "../linear-gradient-text/linear-gradient-text";
import {Lines} from "../lines/lines";

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
`;

const Content = styled.div`
  width: 50%;
`;

const TextAlign = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  color: rgba(255, 255, 255, 0.8);
  padding-bottom: 20px;
  text-align: ${(props) => props.align};
`;

export const Form = () => {
  return (
    <>
      <Lines />
      <AppSizeLayout>
        <TextAlign align="left">
          <LinearGradientText text="ОСТАВЬТЕ ЗАЯВКУ" size="54px" />
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
    </>
  );
};
