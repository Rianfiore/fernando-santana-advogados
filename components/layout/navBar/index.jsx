import { useState } from "react";
import * as S from "./styles";

function NavBar() {
  const [headerTransparent, setHeaderTransparent] = useState(true);

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
            <li>Fernando Santana</li>
            <li>Idioma</li>
          </ul>
          <nav>
            <ul className="right-menu">
              <li>Início</li>
              <li>Sobre</li>
              <li>Equipe</li>
              <li>Contato</li>
            </ul>
          </nav>
        </div>
        <hr></hr>
      </header>
    </S.Container>
  );
}

export default NavBar;
