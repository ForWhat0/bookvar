import { PageFooter } from "../footer/footer";
import { RouterLink } from "../routerLink/routerLink";
import { BubbleBg } from "../bubbleBg/bubbleBg";
import { Header } from "../header/header";
import { BlobBg } from "../blobBg/blobBg";
import { Form } from "../send-form/sendForm";
import { VideoModal } from "../modal/video-modal";
import Menu from "../burgerMenu/menu";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useOnClickOutside } from "../hooks/hooks";
import { actionClickBurger } from "../../redux/actions/actions";

export const Layout = ({
  showLinks,
  children,
  routerLinkTitle,
  headerLogo,
  locale,
}) => {
  const node = useRef();
    const dispatch = useDispatch();
  const { menuBurgerIsOpen } = useSelector((state) => state.app);
  useOnClickOutside(
    node,
    () => menuBurgerIsOpen === true && dispatch(actionClickBurger())
  );

  return (
    <>
      <VideoModal />
      <div ref={node}>
        <Header menuBurgerIsOpen={menuBurgerIsOpen} logo={headerLogo} locale={locale} />
        <Menu menuBurgerIsOpen={menuBurgerIsOpen} logo={headerLogo} locale={locale} />
      </div>
      <BubbleBg />
      <BlobBg />
      {showLinks && <RouterLink routerLinkTitle={routerLinkTitle} />}
      {children}
      <Form />
      <PageFooter logo={headerLogo} locale={locale} />

      <style jsx global>{`
        #__next {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Layout;
