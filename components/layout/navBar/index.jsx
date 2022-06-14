import { useState } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";
import ptBR from "/locales/pt-BR";
import enUS from "/locales/en-US";
import SelectLanguage from "/components/selectLanguage";

function NavBar() {
  const [headerTransparent, setHeaderTransparent] = useState(true),
    router = useRouter(),
    { locale } = router,
    t = locale === "pt-BR" ? ptBR : enUS,
    translate = t.body.nav;

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setHeaderTransparent(false);
      } else {
        setHeaderTransparent(true);
      }
    });
  }

  return (
    <S.Container headerTransparent={headerTransparent}>
      <header>
        <div className="content">
          <ul className="left-menu">
            <li>Fernando</li>
            <SelectLanguage />
          </ul>
          <nav>
            <ul className="right-menu">
              <li>{translate.li1}</li>
              <li>{translate.li2}</li>
              <li>{translate.li3}</li>
              <li>{translate.li4}</li>
            </ul>
          </nav>
        </div>
        <hr></hr>
      </header>
    </S.Container>
  );
}

export default NavBar;
