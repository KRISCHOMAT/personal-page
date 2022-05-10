import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <title>
          Christian Grothe | Webdeveloping | Musicproduction | DIY Instruments
        </title>
        <meta
          name="description"
          content="Hey I am Christian Grothe, a Webdeveloper and Musicproducer. Have a look at my projects and write me a message if you want to work with me!"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          property="og:title"
          content="Christian Grothe | Webdeveloping | Musicproduction | DIY Instruments"
        />
        <metag
          property="og:description"
          content="Hey I am Christian Grothe, a Webdeveloper and Musicproducer. Have a look at my projects and write me a message if you want to work with me!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.christian-grothe.com" />
        <meta
          property="og:image"
          content="https://www.christian-grothe.com/images/og-image.jpg"
        />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta property="og:site_name" content="Christian Grothe" />
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
