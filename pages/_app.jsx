import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import { Layout } from "../components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Marcellus", serif;
}

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Fernando Santana Advogados</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Fernando Santana Advogados" />
          <meta
            name="keywords"
            content="advogados, advogado, fernando, santana, fernando santana, fernando santana advogado, fernando santana advogados, fernando santana advogados"
          />
          <meta name="author" content="Rian Fiore" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="google" content="index, follow" />
          <meta name="google-site-verification" content="_" />
          <meta name="msvalidate.01" content="_" />
          <meta name="alexaVerifyID" content="_" />
          <meta name="yandex" content="_" />
          <meta name="yandex-verification" content="_" />
          <meta name="rating" content="general" />
          <meta name="language" content="pt-br" />
          <meta name="revisit-after" content="1 days" />
          <meta name="distribution" content="global" />
          <meta name="copyright" content="Fernando Santana Advogados" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
