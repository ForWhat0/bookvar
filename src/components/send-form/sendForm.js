import { PlanetMoveBorder } from "../planet/planet-move-on-border";
import { InputStyled } from "../input/input";
import { SendButton } from "../sendButton/sendButton";
import styled from "styled-components";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { device } from "../deviceSizes/deviceSizes";
import {FooterForm, ModalLsi} from "../../Lsi/lsi";
import {LoaderContainer} from "../loader/loader";
import {sendStatementHook} from "../hooks/hooks";
import {useMutation} from "@apollo/client";
import {SendWordpress} from "../../mutations/send-wordpress";
import {useState} from "react";

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
    font-size: 40px;
    padding-top: 10px;

    @media screen and ${device.tablet} {
      font-size: 24px;
      line-height: 24px;
    }

    @media screen and ${device.mobileL} {
      font-size: 20px;
    }
  }

  span {
    font-weight: 500;
    font-size: 20px;
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

const { titleLsi, subTitle } = FooterForm

const {
    nameLsi,
    phoneNumber,
    emptyFields,
    wrongData,
    send,
    sent,
} = ModalLsi;

export const Form = ({locale}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nameWarning, setNameWarning] = useState(null);
    const [phoneWarning, setPhoneWarning] = useState(null);


    const sendStatement = async ( event ) => {

        event.preventDefault()

        if (!name) {
            return setNameWarning(emptyFields[locale]);
        }
        if (!phone) {
            return setPhoneWarning(emptyFields[locale]);
        }
        if (
            phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
        ) {
            await sendWordpress();
            await sendStatementHook(sendContent);
        } else {
            setPhone("");
            return setPhoneWarning(wrongData[locale]);
        }
    };

    const clearAllFields = () => {
        setName("");
        setPhone("");
        setNameWarning("");
        setPhoneWarning("");
    };

    const sendContent = `
        <h1>Заява</h1>
        <ul>
        <li>ім'я: ${name};</li>
        <li>телефон: ${phone};</li>
        <li>id: ${Math.random() + Math.random()}</li>
        <ul/>
        `;

    let [sendWordpress, { data, error, loading }] = useMutation(SendWordpress, {
        variables: {
            input: {
                commentOn: 2,
                content: sendContent,
                author: name,
            },
        },
        onCompleted: () => {
            if (!error) {
                clearAllFields();
            }
        },
        onError: (error) => {
            if (error) {
                clearAllFields();
            }
        },
    });

  return (
    <AppSizeLayout>
      <TextAlign align="left">
        <h1>{titleLsi[locale]}</h1>
      </TextAlign>
      <TextAlign align="right">
        <span>{subTitle[locale]}</span>
      </TextAlign>
      <FormWrapper>
        <FormContainer>
          <PlanetMoveBorder form topPosition size={40} />
          <PlanetMoveBorder form size={80} />
          <Content>
              <InputStyled
                  value={name}
                  maxlength="20"
                  warning={nameWarning}
                  text={nameLsi[locale]}
                  onChange={(e) => setName(e.target.value)}
                  width="100%"
              />
              <InputStyled
                  value={phone}
                  maxlength="20"
                  warning={phoneWarning}
                  text={phoneNumber[locale]}
                  onChange={(e) => setPhone(e.target.value)}
                  width="100%"
              />
              <LoaderContainer>
                  <SendButton
                      sentText={sent[locale]}
                      sendText={send[locale]}
                      errorText={sent[locale]}
                      error={error}
                      done={data}
                      loading={loading}
                      click={sendStatement}
                  />
              </LoaderContainer>
          </Content>
        </FormContainer>
      </FormWrapper>
    </AppSizeLayout>
  );
};
