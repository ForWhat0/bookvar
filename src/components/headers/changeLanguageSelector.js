import { useEffect, useState } from "react";
import styled from "styled-components";
import { app } from "../../Lsi/lsi";
import Link from "next/link";
import { useRouter } from "next/router";
import {Icon} from "../header/header";

const Select = styled.div`
  padding: 0 20px;
  background-color: transparent;
  cursor: pointer;
  position: relative;
`;

const Content = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  font-size: 20px;

  li {
    list-style-type: none;
    margin-right: 5px;
    color: ${(props) => props.color};
  }
`;
const DropDownContent = styled.ul`
  z-index: 5;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  width: 100%;
  margin: 5px 0 0 0;
  padding: 5px 0 5px 0;
  flex-direction: column;
  list-style-type: none;
  box-shadow: 0px 0px 20px rgba(29, 29, 27, 0.2);
  display: ${(props) => props.open};
  text-align: center;

  li {
    text-align: center;
  }

  li a {
    display: block;
    width: 100%;
    padding: 3px;
    font-size: 20px;
    color: black;

    &:hover {
      background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const ChangeLanguageSelector = () => {
  const router = useRouter();
  const { locales, locale } = router;
  const { languages } = app;
  const [localeState, setLocaleState] = useState(languages[locale]);
  const [open, setOpen] = useState(false);

  useEffect(() => setLocaleState(languages[locale]), [locale]);

  return (
    <Select>
      <Content onClick={() => setOpen(!open)} >
        <li>{localeState}</li>
        <Icon src='/change-language-arrow.svg' open={open ? "-180deg" : "0"} />
      </Content>
      <DropDownContent open={open ? "block" : "none"}>
        {locales.map((locale) => (
          <li onClick={() => setOpen(false)} key={locale}>
            <Link scroll={false} href={router.asPath} locale={locale}>
              <a>{languages[locale]}</a>
            </Link>
          </li>
        ))}
      </DropDownContent>
    </Select>
  );
};
