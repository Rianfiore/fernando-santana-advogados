import { useLang } from "/context/useLanguage";
import * as S from "./styles";

function Footer() {
  let translate = useLang().initialLanguage.body.footer;
  return (
    <S.Container>
      <footer>
        <div className="content">
          <ul className="left-menu">
            <li>Footer aqui</li>
            <li>Idioma</li>
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
      </footer>
    </S.Container>
  );
}

export default Footer;
