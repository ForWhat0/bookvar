import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../burgerMenu/menu";
import {
  useOnClickOutside,
  WindowDimensionsOffVisuallyImpaired,
} from "../hooks/hooks";
import {
  actionClickBurger,
  OnchangeInputSearchNews,
} from "../../redux/actions/actions";
import { PageFooter } from "../footer/footer";
import { StyledRegisterZNO } from "../leftComment/registerOnZNO";
import { Element } from "react-scroll";
import NewsWrapper from "../news/newsWrapper";
import StyledLoader from "../loader/loader";
import { LoaderContainer } from "../../../pages/calendar";
import { NewsLsi } from "../../Lsi/lsi";
import { useRouter } from "next/router";
import { RouterLink } from "../routerLink/routerLink";
import { BubbleBg } from "../bubbleBg/bubbleBg";
import {Header} from "../header/header";
import {BlobBg} from "../blobBg/blobBg";
import {Form} from "../send-form/sendForm";
import {VideoModal} from "../modal/video-modal";

export const Layout = ({
  showLinks,
  databaseId,
  contacts,
  menu,
  hideLeftComponent,
  children,
  header,
  showZNORegister,
  routerLinkTitle,
                         headerLogo,
                         headerMenu
}) => {
  const { visuallyImpairedMode } = useSelector((state) => state.app);
  const canUseDOM = typeof window !== "undefined";
  const router = useRouter();
  const locale = router.locale;
  const pathname = router.pathname;
  const dispatch = useDispatch();
  const { visuallyImpairedModeWhiteTheme } = useSelector((state) => state.app);
  const { loading } = useSelector((state) => state.app);
  const { inputNewsByTitle } = useSelector((state) => state.news);
  const { newsByTitle } = useSelector((state) => state.news);
  const { fontSize } = useSelector((state) => state.app);


  return (
    <>
     {/* <Head>
        <link rel="icon" sizes="10x10" href={contacts?.iconSite?.sourceUrl} />
        <meta name="description" content={contacts?.descrSite} />
        <title>{contacts?.titleSite}</title>
      </Head>*/}
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
