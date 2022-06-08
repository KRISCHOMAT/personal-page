import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <title>Christian Grothe | Webdeveloping | Frontend | Backend</title>
      </Head>
      <div className="wrapper">
        <ParallaxProvider>
          <Header />
          <Component {...pageProps} />
        </ParallaxProvider>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
