import styled from "styled-components";
import {device} from "../deviceSizes/deviceSizes";

const Text = styled.span`
  background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: ${(props) => props.size};
  padding-top:10px;
  
  @media screen and ${device.mobileL} {
  font-size: ${(props) => props.mobileResponseSize};
  }
`;

export const LinearGradientText = ({ text, size }) => {
  const mobileResponseSize = size === '25px' || size === '45px' ? '20px' : size
  return <Text mobileResponseSize={mobileResponseSize} size={size}>{text}</Text>
};
