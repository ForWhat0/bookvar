import styled from "styled-components";
import {device} from "../deviceSizes/deviceSizes";

const LinesContainer = styled.div`
    background: url(/lines.svg) center center no-repeat;
    width: 100%;
    height: 300px;
    background-size: contain;
    
     @media screen and ${device.laptopL} {
     height: 200px;
  }
   @media screen and ${device.laptop} {
     height: 150px;
  }
   @media screen and ${device.tablet} {
     height: 100px;
  }
  @media screen and ${device.mobileL} {
     height: 50px;
  }
`;

export const Lines = () => {
  return <LinesContainer />;
};
