import "../styles/globals.css";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { pageview } from "/lib/gtag";
import Head from "next/head";
import { StoreProvider } from "../utils/store";
const TRACKING_ID = "UA-171095213-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    const handleRouteChange = (url) => {
      pageview(url, document.title);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Yvon Mu</title>
      </Head>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}

export default MyApp;
