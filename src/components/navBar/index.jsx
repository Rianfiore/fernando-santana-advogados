import * as S from "./styles";

export const NavBar = () => {
  return (
    <S.Container>
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
      </header>
    </S.Container>
  );
};
