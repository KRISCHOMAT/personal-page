import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Hey I am Christian Grothe, a fullstack webdeveloper. Have a look at my projects and write me a message if you want to work with me!"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          property="og:title"
          content="Christian Grothe | Webdeveloping | Frontend | Backend"
        />
        <metag
          property="og:description"
          content="Hey I am Christian Grothe, a fullstack webdeveloper. Have a look at my projects and write me a message if you want to work with me!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.christian-grothe.com" />
        <meta
          property="og:image"
          itemProp="image"
          content="https://www.christian-grothe.com/images/og-image.jpg"
        />
        <meta property="og:image:alt" content="profile image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Christian Grothe" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
