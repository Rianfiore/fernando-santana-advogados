import { useState } from "react";
import * as S from "./styles";
import SelectLanguage from "/components/selectLanguage";
import { useLang } from "/context/useLanguage";
import Link from "next/link";
import { useRouter } from "next/router";
import { paths } from "/locales";

function NavBar() {
  const [headerTransparent, setHeaderTransparent] = useState(true);
  const router = useRouter();
  let translate = useLang().initialLanguage.body.nav;
  let locale = useLang().initialLanguage.locale;

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
          <div className="left-menu">
            <SelectLanguage />
          </div>
          <nav>
            <ul className="right-menu">
              <Link href={`${locale}${paths.home}`}>
                <li>{translate.li1}</li>
              </Link>
              <Link href={`${locale}${paths.aboutUs}`}>
                <li>{translate.li2}</li>
              </Link>
              <Link href={`${locale}${paths.squad}`}>
                <li>{translate.li3}</li>
              </Link>
              <Link href={`${locale}${paths.contact}`}>
                <li>{translate.li4}</li>
              </Link>
            </ul>
          </nav>
        </div>
        <hr></hr>
      </header>
    </S.Container>
  );
}

export default NavBar;
