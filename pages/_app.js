import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../src/redux/store/store";
import "../styles/globals.css";
import "../styles/swiper.scss";
import "../styles/blobs-animation.css";
import "../styles/bubbleBg.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";
import Head from "next/head";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Head>
            <link
              href="/fonts/montserrat/Montserrat-Medium.ttf"
              rel="preload"
              as="font"
              type="font/ttf"
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />

          </Head>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
