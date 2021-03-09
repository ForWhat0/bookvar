import { PageFooter } from "../footer/footer";
import { RouterLink } from "../routerLink/routerLink";
import { BubbleBg } from "../bubbleBg/bubbleBg";
import {Header} from "../header/header";
import {BlobBg} from "../blobBg/blobBg";
import {Form} from "../send-form/sendForm";
import {VideoModal} from "../modal/video-modal";

export const Layout = ({
  showLinks,
  children,
  routerLinkTitle,
                         headerLogo,
                         headerMenu
}) => {



  return (
    <>
      <VideoModal />
      <Header logo={headerLogo} menu={headerMenu}/>
      <BubbleBg />
      <BlobBg/>
      {showLinks && <RouterLink routerLinkTitle={routerLinkTitle} />}
      {children}
      <Form/>
      <PageFooter logo={headerLogo} menu={headerMenu}/>

      <style jsx global>{`
        #__next {
          overflow: hidden;
        }
       `}</style>
    </>
  );
};

export default Layout;
