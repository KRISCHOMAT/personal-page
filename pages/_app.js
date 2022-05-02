import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
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
