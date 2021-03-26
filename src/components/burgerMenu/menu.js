import {
  ALink,
  StyledMenu,
  Ul,
  Li,
  PlanetContainer,
  SpaceBetween,
} from "./menuStyled";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { menu } from "../../Lsi/lsi";
import { ChangeLanguageSelector } from "../headers/changeLanguageSelector";
import { actionClickBurger } from "../../redux/actions/actions";
import { useRouter } from "next/router";
import React, { createRef, useEffect } from "react";

const Menu = ({ logo, menuBurgerIsOpen }) => {
  const { locale, pathname } = useRouter();
  const dispatch = useDispatch();
  const handlerCloseMenu = () => {
    menuBurgerIsOpen === true && dispatch(actionClickBurger());
  };

  const ulRef = createRef();

  useEffect(() => {
    ulRef.current.scrollTop = 0;
  }, [menuBurgerIsOpen]);

  const activeLink = {
    background: "linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);",
    text: "text",
    transparent: "transparent",
  };
  return (
    <StyledMenu open={menuBurgerIsOpen} ref={ulRef}>
      <div id="blobModal" className="blob sizeBlobModal">
        &nbsp;
      </div>
      <div id="blobModalDiff" className="blob sizeBlobModal">
        &nbsp;
      </div>
      <Ul>
        {menu.burgerMenu.map((button, i) => (
          <Link key={i + button.name} href={button.link}>
            <Li onClick={() => handlerCloseMenu()}>
              <PlanetContainer
                display={pathname === button.link ? "block" : "none"}
              >
                <div />
                <ALink activeLink={pathname === button.link && activeLink}>
                  {button.name[locale]}
                </ALink>
                <div />
              </PlanetContainer>
            </Li>
          </Link>
        ))}
        <SpaceBetween>
          <ChangeLanguageSelector/>
        </SpaceBetween>
      </Ul>
    </StyledMenu>
  );
};
export default Menu;
