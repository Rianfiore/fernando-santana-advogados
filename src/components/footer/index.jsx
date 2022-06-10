import * as S from "./styles";

export const Footer = () => {
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
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>WhatsApp</li>
            </ul>
          </nav>
        </div>
      </footer>
    </S.Container>
  );
};
