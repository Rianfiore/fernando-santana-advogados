import { createContext, useContext, useEffect, useState } from "react";
import { defaultLocale, locales } from "/locales";

const LanguageContext = createContext({});
const [ptBR, enUS] = locales;
export let isWindowRender = false;

function UseLanguage({ children }) {
  const [initialLanguage, setInitialLanguage] = useState(defaultLocale);

  function changeLanguage(language) {
    switch (language) {
      case "pt-BR":
        setInitialLanguage(ptBR);
        break;
      default:
        setInitialLanguage(enUS);
        break;
    }
  }

  useEffect(() => {
    if (window !== "undefined") {
      let detectedLanguage = locales.find(
        (e) => window.navigator.language === e.langCode
      );

      if (detectedLanguage) {
        setInitialLanguage(detectedLanguage);
        isWindowRender = true;
      } else {
        setInitialLanguage(defaultLocale);
        isWindowRender = true;
      }
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{ initialLanguage, changeLanguage, isWindowRender }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

export default UseLanguage;
