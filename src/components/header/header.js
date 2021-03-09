import { AppSizeLayout } from "../layouts/appSizeLayout";
import styled from "styled-components";
import Burger from "../burgerMenu/burgerMenu";
import { device } from "../deviceSizes/deviceSizes";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #ffffff;
    flex-wrap: wrap;

    @media screen and ${device.laptop} {
      display: none;
    }
  }

  li {
    padding: 10px 0;
  }
`;
const Logo = styled.div`
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: contain;
  width: 263px;
  height: 65px;
`;

export const Header = ({ logo, menu }) => {
  return (
    <AppSizeLayout>
      <HeaderContainer>
        <Logo src={logo} />
        <ul>
          {menu.map((item, index) => (
            <li key={item.name + index}>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
        <Burger />
      </HeaderContainer>
    </AppSizeLayout>
  );
};
