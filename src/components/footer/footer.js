import styled from "styled-components";
import { Icon } from "../icon/icon";
import { Header } from "../header/header";
import { AppSizeLayout } from "../layouts/appSizeLayout";

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
`;
const FirstBlock = styled.div`
  grid-area: first;
  grid-area: first;
  display: flex;
  justify-content: left;
`;
const FirstContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  div {
    display: flex;
    align-items: center;
  }

  div span {
    padding-left: 15px;
    padding-bottom: unset;
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
  }
`;

export const PageFooter = ({ logo, menu }) => {
  return (
    <>
      <Header logo={logo} menu={menu} />
      <AppSizeLayout>
        <Contacts>
          <FirstBlock>
            <FirstContent>
              <span>Адрес: Киев, пр. Победы, 36</span>
              <span>Адрес: Киев, пр. Победы, 36</span>
              <div>
                <Icon src="/gmail-icon.svg" />
                <span>Адрес: Киев, пр. Победы, 36</span>
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
            <Icon src="/instagram-icon.svg" />
            <Icon src="/youtube-icon.svg" />
            <Icon src="/facebook-icon.svg" />
          </ThreeBlock>
        </Contacts>
        <Develop>
          <div>
            <span>Компания-разработчик</span>
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
