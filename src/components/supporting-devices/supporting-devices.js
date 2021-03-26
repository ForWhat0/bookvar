import { AppSizeLayout } from "../layouts/appSizeLayout";
import { TitleForComponent } from "../titleForComponent/title";
import styled from "styled-components";
import { ButtonHandler } from "../use-experience/button-handler";
import { device } from "../deviceSizes/deviceSizes";
import { useState } from "react";
import {SupportingDevicesLsi} from "../../Lsi/lsi";

const Container = styled.div`
  display: flex;
  padding: 0 0 140px 0;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    padding: unset;
  }
`;
const DevicesWrapper = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1250px) {
    width: 100%;
    margin-bottom: 60px;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;

  span {
    padding-left: 20px;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.04em;
    color: #ffffff;

    @media screen and ${device.tablet} {
      font-size: 20px;
      line-height: 20px;
      justify-content: center;
    }
    @media screen and ${device.mobileL} {
      font-size: 16px;
    }
  }

  @media screen and ${device.mobileL} {
    padding-bottom: 30px;
    justify-content: center;
  }
`;
const Icon = styled.div`
  background: url(${(props) => props.icon}) center center no-repeat;
  background-size: contain;
  width: 60px;
  height: 60px;

  @media screen and ${device.tablet} {
    width: 40px;
    height: 40px;
  }
  @media screen and ${device.mobileL} {
    width: 30px;
    height: 30px;
  }
`;
const Devices = styled.div`
  display: flex;
  overflow-y: scroll;
  max-height: 400px;
  justify-content: space-between;

  &::-webkit-scrollbar {
    width: 20px;

    @media screen and ${device.tablet} {
      width: 10px;
    }
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: radial-gradient(
        96% 96% at 70.4% 31.2%,
        #0089e3 0%,
        rgba(0, 2, 16, 0) 100%
      ),
      #0069ae;
    box-shadow: 0px 4px 80px #0089e3,
      inset 0px 2px 10px rgba(255, 255, 255, 0.58),
      inset 10px 16px 20px rgba(42, 246, 255, 0.95);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
  }

  ul {
    padding: 0 50px 0 0;
    margin: 0;
    list-style: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.8);

    @media screen and ${device.tablet} {
      font-size: 16px;
      line-height: 17px;
      padding: 0 20px 0 0;
    }
    @media screen and ${device.mobileL} {
      font-size: 14px;
    }
  }
`;
const Models = styled.div`
  width: calc(100% - 60px);
  background: rgba(140, 140, 140, 0.1);
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  padding: 12px 0;

  span {
    padding-left: unset;
  }

  div {
    border: 1px solid #ffffff;
  }

  @media screen and ${device.tablet} {
    width: 100%;
  }
`;
export const SupportingDevices = ({
  locale,
  androidListModel,
  ipadListModel,
  iphoneListModel,
  ipodListModel,
}) => {
  const [iosDevices, setIosDevices] = useState(iphoneListModel);
  const [typeDevices, setTypeDevices] = useState("iPhone");
  const TypeOfIosDevices = [
    {
      name: "iPhone",
    },
    {
      name: "iPad",
    },
    {
      name: "Ipod",
    },
  ];

  const changeIosDevicesHandler = (type) => {
    setTypeDevices(type);
    type === "iPhone"
      ? setIosDevices(iphoneListModel)
      : type === "iPad"
      ? setIosDevices(ipadListModel)
      : setIosDevices(ipodListModel);
  };
  const { firstTitle, secondTitle } = SupportingDevicesLsi;
  return (
    <AppSizeLayout>
      <TitleForComponent>
        {firstTitle[locale]}
        <h1>AR</h1>
        {secondTitle[locale]}
      </TitleForComponent>
      <Container>
        <DevicesWrapper width="40%">
          <FlexContainer>
            <Icon icon="/ios-icon.svg" />
            <span>IOS устройства</span>
          </FlexContainer>
          <FlexContainer>
            {TypeOfIosDevices.map((item) => (
              <ButtonHandler
                opacity={item.name === typeDevices}
                key={item.name}
                onClick={() => changeIosDevicesHandler(item.name)}
                type={item.name}
              />
            ))}
          </FlexContainer>
          <Devices>
            <ul>
              {iosDevices.map((device) => (
                <li>{device.itemModel}</li>
              ))}
            </ul>
          </Devices>
        </DevicesWrapper>
        <DevicesWrapper width="50%">
          <FlexContainer>
            <Icon icon="/android-icon.svg" />
            <span>Android устройства</span>
          </FlexContainer>
          <FlexContainer>
            <Models>
              <span>Мануфактура</span>
              <div />
              <span>Модель</span>
            </Models>
          </FlexContainer>
          <Devices>
            <ul>
              {androidListModel.map((device, index) => (
                <li key={device.androidItemManufactory + index}>
                  {device.androidItemManufactory}
                </li>
              ))}
            </ul>
            <ul>
              {androidListModel.map((device, index) => (
                <li key={device.androidItemModel + index}>
                  {device.androidItemModel}
                </li>
              ))}
            </ul>
          </Devices>
        </DevicesWrapper>
      </Container>
    </AppSizeLayout>
  );
};
