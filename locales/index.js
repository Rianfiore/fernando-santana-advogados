import { default as ptBR } from "./pt-BR";
import { default as enUS } from "./en-US";

const locales = [ptBR, enUS],
  defaultLocale = enUS,
  paths = {
    home: "",
    aboutUs: "/about",
    squad: "/squad",
    contact: "/contact",
  };

export { locales, defaultLocale, paths };
