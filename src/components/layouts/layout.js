import Head from "next/head";
import { PageFooter } from "../footer/footer";
import { RouterLink } from "../routerLink/routerLink";
import { BubbleBg } from "../bubbleBg/bubbleBg";
import { Header } from "../header/header";
import { BlobBg } from "../blobBg/blobBg";
import { Form } from "../send-form/sendForm";
import { VideoModal } from "../modal/video-modal";
import Menu from "../burgerMenu/menu";
import { useSelector } from "react-redux";
import { Modal } from "../modal/modal";

export const Layout = ({
  showLinks,
  children,
  routerLinkTitle,
  siteInfo,
  locale,
  partners,
}) => {
  const { iconSite, siteDescription, logoSite } = siteInfo;
  const { menuBurgerIsOpen } = useSelector((state) => state.app);

  return (
    <>
      <Head>
        <link rel="icon" sizes="10x10" href={iconSite?.sourceUrl} />
        <meta name="description" content={siteDescription} />
        <title>Треба добавити</title>
      </Head>
      <VideoModal />
      <Modal />

        <Header
          menuBurgerIsOpen={menuBurgerIsOpen}
          logo={logoSite?.sourceUrl}
          locale={locale}
        />
        <Menu
          menuBurgerIsOpen={menuBurgerIsOpen}
          locale={locale}
        />

      <BubbleBg />
      <BlobBg />
      {showLinks && <RouterLink routerLinkTitle={routerLinkTitle} />}
      {children}
      <Form locale={locale} />
      <PageFooter partners={partners} siteInfo={siteInfo} locale={locale} />

      <style jsx global>{`
        #__next {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Layout;
