import styled from "styled-components";
import { Icon } from "../icon/icon";
import { Header } from "../header/header";
import { AppSizeLayout } from "../layouts/appSizeLayout";
import { Lines } from "../lines/lines";
import { FooterMenu } from "../header/footer-menu";
import { footerInfo } from "../../Lsi/lsi";
import { device } from "../deviceSizes/deviceSizes";

const Contacts = styled.div`
  display: grid;
  grid-template-areas: "first second three";
  grid-template-columns: 1fr 1fr 0.5fr;
  grid-template-rows: 1fr;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding-top: 50px;
  width: 80%;
  margin-left: 10%;

  @media screen and (max-width: 2000px) {
    width: 100%;
    margin-left: unset;
  }
  @media screen and (max-width: 1200px) {
    grid-template-areas:
      "first second"
      "first three";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media screen and ${device.laptop} {
    font-size: 16px;
    line-height: 20px;
  }
  @media screen and ${device.tablet} {
    padding-top: 40px;
    grid-template-areas:
      "second"
      "first"
      "three";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;
const FirstBlock = styled.div`
  grid-area: first;
  display: flex;
  justify-content: left;
  @media screen and ${device.tablet} {
    justify-content: center;
  }
`;
const FirstContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  @media screen and ${device.tablet} {
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
  }

  div a {
    color: white;
  }

  div a span {
    cursor: pointer;
    padding-left: 15px;
    padding-bottom: unset;

    &:hover {
      background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  span {
    padding-bottom: 20px;
  }
`;
const SecondBlock = styled.div`
  grid-area: second;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    justify-content: flex-end;
  }
  @media screen and ${device.tablet} {
    justify-content: center;
  }
`;
const SecondContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  span {
    padding: 10px 0;
  }
`;
const ThreeBlock = styled.div`
  grid-area: three;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    justify-content: flex-end;
  }

  @media screen and ${device.tablet} {
    justify-content: center;
  }

  a {
    @media screen and (max-width: 1200px) {
      padding-left: 30px;
    }
    @media screen and ${device.tablet} {
      padding-left: unset;
      padding 0 10px;
  }
  }
`;

const Develop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding: 50px 40px;

  @media screen and ${device.laptop} {
    font-size: 14px;
    line-height: 17px;
  }
  @media screen and ${device.tablet} {
    padding: 60px 0 40px 0;
  }

  div {
    display: flex;
    align-items: center;
  }

  a div {
    padding-left: 10px;
    background: url(/flex-reality.svg) center center no-repeat;
    background-size: contain;
    height: 24px;
    width: 150px;
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }

    @media screen and ${device.laptop} {
      width: 100px;
      margin-left: 5px;
      padding-left: unset;
    }
  }
`;

const { address, schedule, developBy } = footerInfo;

export const PageFooter = ({ logo, locale }) => {
  return (
    <>
      <Lines />
      <FooterMenu logo={logo} locale={locale} />
      <AppSizeLayout>
        <Contacts>
          <FirstBlock>
            <FirstContent>
              <span>{address[locale]} Киев, пр. Победы, 36</span>
              <span>{schedule[locale]} с 10:00 до 19:00</span>
              <div>
                <Icon src="/gmail-icon.svg" />
                <a href="mailto:rzozyla@gmail.com">
                  <span>rzozyla@gmail.com</span>
                </a>
              </div>
            </FirstContent>
          </FirstBlock>
          <SecondBlock>
            <Icon src="/phone-icon.svg" />
            <SecondContent>
              <span>+380 961 77 45 74</span>
              <span>+380 961 77 45 74</span>
            </SecondContent>
          </SecondBlock>
          <ThreeBlock>
            <a href="#" target="_blank">
              <Icon src="/instagram-icon.svg" />
            </a>
            <a href="#" target="_blank">
              <Icon src="/youtube-icon.svg" />
            </a>
            <a href="#" target="_blank">
              <Icon src="/facebook-icon.svg" />
            </a>
          </ThreeBlock>
        </Contacts>
        <Develop>
          <div>
            <span>{developBy[locale]}</span>
            <a href="https://flexreality.pro/" target="_blank">
              <div />
            </a>
          </div>
          <span>© 2017-2020</span>
        </Develop>
      </AppSizeLayout>
    </>
  );
};
