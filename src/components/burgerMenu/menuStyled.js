import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

export const StyledMenu = styled.nav`
  height: 100vh;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  overflow-x: hidden;
  box-shadow: 0px 0px 20px rgba(29, 29, 27, 0.2);
  display: ${({ open }) => (open ? "block" : "none")};
  width: ${({ open }) => (open ? "100%" : "0")};
  transition: all 0.3s linear;
  padding: 0;
  text-align: left;
  background: linear-gradient(360deg, #04184c 0%, #12162a 100%, #5860b8 100%);
`;
export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  color: #ffffff;
  flex-direction: column;
  z-index: 5;
  align-items: center;
  margin: 150px 0 0 0;
  padding: 30px;
  text-align: center;
  list-style-type: none;
  @media (max-width: 500px) {
    margin: 100px 0 0 0;
    padding: unset;
  }
`;
export const Li = styled.li`
  margin-bottom: 20px;
  cursor: pointer;
`;
export const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items-center;
`;
export const CircleBackground = styled.div`
  height: 50%;
  z-index: -1;
  background: rgba(0, 174, 239, 0.08);
  width: 50%;
  top: 10%;
  border-radius: 50%;
  position: absolute;
  @media screen and ${device.mobileL} {
    width: 100%;
    left: -50%;
    height: 80%;
  }
`;
export const ALink = styled.a`
  padding: 10px 20px;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s linear;
  background: ${(props) => props.activeLink.background};
  -webkit-background-clip: ${(props) => props.activeLink.text};
  -webkit-text-fill-color: ${(props) => props.activeLink.transparent};
`;
export const HeaderInner = styled.div`
  width: 100%;
  z-index: 6;
  position: fixed;
  background-size: cover;
  margin-top: unset;
  background-position: center;
  padding-bottom: unset;
  border-bottom: unset;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
  margin-left: 10%;
  @media screen and ${device.mobileL} {
    width: 93.6%;
    margin-left: 3.2%;
  }
`;

export const PlanetContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    display: ${(props) => props.display};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(
        96% 96% at 70.4% 31.2%,
        #0089e3 0%,
        rgba(0, 2, 16, 0) 100%
      ),
      #0069ae;
    box-shadow: 0px 4px 80px #0089e3,
      inset 0px 2px 10px rgba(255, 255, 255, 0.58),
      inset 10px 16px 20px rgba(42, 246, 255, 0.95);
  }
`;
export const SpaceBetween = styled.div`
  padding-top: 30px;
`;
