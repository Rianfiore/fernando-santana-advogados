import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Layout } from "/components";
import UseLanguage from "/context/useLanguage";
import HeadComponent from "../components/head";

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
    <UseLanguage>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HeadComponent />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UseLanguage>
  );
}

export default MyApp;
