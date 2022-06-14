import Router, { useRouter } from "next/router";
import * as S from "./styles";
import ptBR from "/locales/pt-BR";
import enUS from "/locales/en-US";
import { MdLanguage } from "react-icons/md";
import { BiDownArrow } from "react-icons/bi";

function SelectLanguage() {
  const router = useRouter(),
    { locale } = router,
    t = locale === "pt-BR" ? ptBR : enUS,
    translate = t.body.nav,
    changeLanguage = (e) => {
      const locale = e.target.value;
      Router.push("/", "/", { locale });
    };
  return (
    <S.Container>
      <select onChange={changeLanguage} defaultValue={locale}>
        <option value="pt-BR">{translate.ptBR}</option>
        <option value="en-US">{translate.enUS}</option>
      </select>
    </S.Container>
  );
}

export default SelectLanguage;
