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
import { ChangeLanguageSelector } from "../header/changeLanguageSelector";
import {
  actionClickBurger,
  actionClickModal,
} from "../../redux/actions/actions";
import { useRouter } from "next/router";
import { createRef, useEffect } from "react";
import { Blob } from "../blobBg/blob";

const Menu = ({ menuBurgerIsOpen }) => {
  const { locale, pathname } = useRouter();
  const dispatch = useDispatch();
  const handlerCloseMenu = () => {
    menuBurgerIsOpen === true && dispatch(actionClickBurger());
  };

  const ulRef = createRef();

  const openModal = () => {
    handlerCloseMenu();
    dispatch(actionClickModal(true));
  };

  useEffect(() => {
    ulRef.current.scrollTop = 0;
  }, [menuBurgerIsOpen]);

  const activeLink = {
    background: "linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);",
    text: "text",
    transparent: "transparent",
  };
  {
    menu.footerMenu.map((item, index) =>
      item.link === "#" ? (
        <li onClick={() => dispatch(actionClickModal(true))}>
          <a>{item.name[locale]}</a>
        </li>
      ) : (
        <Link href={item.link}>
          <li key={item.link + index}>
            <a>{item.name[locale]}</a>
          </li>
        </Link>
      )
    );
  }
  return (
    <StyledMenu open={menuBurgerIsOpen} ref={ulRef}>
      <Blob modal={true} different={true} />
      <Blob modal={true} />
      <Ul>
        {menu.burgerMenu.map((button, i) =>
          button.link === "#" ? (
            <Li onClick={() => openModal()}>
              <ALink activeLink={false}>{button.name[locale]}</ALink>
            </Li>
          ) : (
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
          )
        )}
        <SpaceBetween>
          <ChangeLanguageSelector />
        </SpaceBetween>
      </Ul>
    </StyledMenu>
  );
};
export default Menu;
