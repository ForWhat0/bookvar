import { AppSizeLayout } from "../layouts/appSizeLayout";
import { TitleForComponent } from "../titleForComponent/title";
import styled from "styled-components";
import {FieldTextIcon} from "../field-text-icon/field-text-icon";

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  padding: 80px 0 140px 0;
  grid-gap: 20%;
`;
const DevicesWrapper = styled.div`
display:flex;
flex-direction:column;
`
const IconContainer = styled.div`
display:flex;
align-items: center;
padding-bottom:40px;

span {
padding-left:20px;
font-weight: 500;
font-size: 25px;
line-height: 30px;
letter-spacing: 0.04em;
color: #FFFFFF;
}
`
const Icon = styled.div`
background: url(${props=>props.icon}) center center no-repeat;
background-size:contain;
width:60px;
height:60px;
`
const Devices = styled.div`
  display: flex;
  overflow-y: scroll;
  height: 400px;
  justify-content: space-between;

  &::-webkit-scrollbar {
    width: 20px;
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
  }
`;

export const SupportingDevices = ({ devices }) => {
  return (
    <AppSizeLayout>
      <TitleForComponent>
        Устройства поддерживающие
        <h1>AR</h1>
        технологию
      </TitleForComponent>
      <Container>
          <DevicesWrapper>
              <IconContainer>
                  <Icon icon='/ios-icon.svg'/>
                  <span>IOS устройства</span>
              </IconContainer>
              <Devices>
                  <ul>
                      {devices.map((device) => (
                          <li>{device.name}</li>
                      ))}
                  </ul>
              </Devices>
          </DevicesWrapper>
          <DevicesWrapper>
              <IconContainer>
                  <Icon icon='/android-icon.svg'/>
                  <span>Android устройства</span>
              </IconContainer>
              <Devices>
                  <ul>
                      {devices.map((device) => (
                          <li>{device.name}</li>
                      ))}
                  </ul>
                  <ul>
                      {devices.map((device) => (
                          <li>{device.name}</li>
                      ))}
                  </ul>
              </Devices>
          </DevicesWrapper>
      </Container>
    </AppSizeLayout>
  );
};
