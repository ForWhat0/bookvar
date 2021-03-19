import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

const Layout = styled.div`
  width: 80%;
  margin-left: 10%;
  @media screen and ${device.tablet} {
    width: 93.6%;
    margin-left: 3.2%;
  }
`;

export const AppSizeLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};
