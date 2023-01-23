import { useLang } from "/context/useLanguage";
import Link from "next/link";
import { locales } from "/locales";
import * as S from "./styles";
import { BsGlobe } from "react-icons/bs";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

function SelectLanguage() {
  const { initialLanguage, changeLanguage } = useLang();
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [ptBR, enUS] = locales;
  const router = useRouter();

  const handleDropdownMenu = () => {
    setDropdown(!dropdown);
    dropdown
      ? (dropdownRef.current.id = "dropdown-close")
      : (dropdownRef.current.id = "dropdown-open");
  };

  const handleChangeLanguage = (language) => {
    changeLanguage(language.langCode);
    handleDropdownMenu();
  };

  return (
    <S.Container>
      <div className="dropdown">
        <button onClick={() => handleDropdownMenu()}>
          <BsGlobe />
          {initialLanguage.language}
        </button>
        <ul className="dropdown" ref={dropdownRef}>
          <Link
            href={`/[locales]${router.basePath}`}
            as={`${ptBR.locale + router.basePath}`}
          >
            <a
              className="dropdown-item"
              onClick={() => handleChangeLanguage(ptBR)}
            >
              {ptBR.language}
            </a>
          </Link>
          <Link
            href={`/[locales]${router.basePath}`}
            as={`${enUS.locale + router.basePath}`}
          >
            <a
              className="dropdown-item"
              onClick={() => handleChangeLanguage(enUS)}
            >
              {enUS.language}
            </a>
          </Link>
        </ul>
      </div>
    </S.Container>
  );
}

export default SelectLanguage;
