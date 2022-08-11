import Head from "next/head";
import { useLang } from "/context/useLanguage";

function HeadComponent() {
  const translate = useLang().initialLanguage.head;
  return (
    <Head>
      <title>{translate.title}</title>
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
  );
}

export default HeadComponent;
