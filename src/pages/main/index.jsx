import * as S from "./styles";
import {
  libraIcon,
  prismIcon,
  MdFamilyRestroom,
  MdGroups,
  FaChalkboardTeacher,
  FaChess,
  FaHandshake,
  IoIosBusiness,
  MdWork,
  RiFileSearchFill,
  RiBankFill,
  HiCurrencyDollar,
  MdRealEstateAgent,
} from "../../img";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { useState } from "react";

const data = [
  {
    color: "primary",
    icon: <MdFamilyRestroom size="5vw" color="#fbce33" />,
    title: "Direito de Família",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "secondary",
    icon: <MdGroups size="5vw" color="#fbce33" />,
    title: "Direito Civil",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "primary",
    icon: <FaChalkboardTeacher size="5vw" color="#fbce33" />,
    title: "Direito do Trabalho",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "secondary",
    icon: <FaChess size="5vw" color="#fbce33" />,
    title: "Contencioso / Resolução de disputas",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "primary",
    icon: <FaHandshake size="5vw" color="#fbce33" />,
    title: "Arbitragem, Negociação e Mediação",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "secondary",
    icon: <IoIosBusiness size="5vw" color="#fbce33" />,
    title: "Recuperação de Empresas e Falências",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "primary",
    icon: <MdWork size="5vw" color="#fbce33" />,
    title: "Direito Empresarial",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "secondary",
    icon: <RiFileSearchFill size="5vw" color="#fbce33" />,
    title: "Pesquisa",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "primary",
    icon: <RiBankFill size="5vw" color="#fbce33" />,
    title: "Direito Administrativo e Regulatório",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "secondary",
    icon: <HiCurrencyDollar size="5vw" color="#fbce33" />,
    title: "Direito Bancário e Mercado de Capitais",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "primary",
    icon: <MdRealEstateAgent size="5vw" color="#fbce33" />,
    title: "Planejamento Sucessório e Patrimonial",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
];

export const Main = () => {
  const [animationState, setAnimationState] = useState(false);

  return (
    <S.Container hoverAnimation={animationState}>
      <main>
        <section className="banner">
          <div className="background"></div>
          <div className="textBox">
            <figure className="mainIcon">
              <img src={libraIcon} alt="Balança da justiça" />
            </figure>
            <div className="title">
              <h1>Experiência</h1>
              <figure className="prismIcon">
                <img src={prismIcon} alt="Separador de texto" />
              </figure>
              <h1>Confiança</h1>
              <figure className="prismIcon">
                <img src={prismIcon} alt="Separador de texto" />
              </figure>
              <h1>Resultado</h1>
            </div>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ultrices erat vitae turpis semper consectetur. Quisque accumsan
              lorem non metus imperdiet, ut pretium urna lobortis. Mauris
              elementum nulla id metus maximus, vitae convallis sapien rhoncus.
            </p>
          </div>
          <Button content="Entrar em contato" />
        </section>
        <section className="specialties">
          <div
            className="viewport"
            onMouseEnter={() => setAnimationState(true)}
            onMouseLeave={() => setAnimationState(false)}
          >
            <div className="contents">
              {data.map((el, index) => {
                return (
                  <Card
                    key={index}
                    color={el.color}
                    icon={el.icon}
                    title={el.title}
                    subtitle={el.subtitle}
                  >
                    <Button content={el.buttonContent} />
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        {/* <section className="awards">
          <div class="content">
            <h2>Premiações</h2>
            <hr></hr>
            <p>
              Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet
              porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam
              quis nunc eget quam mollis rhoncus. Pellentesque eu tristique
              massa. Ut eget elementum mi, ut tristique metus. Suspendisse
              auctor blandit molestie.
            </p>
            <Button content="Entrar em contato" />
          </div>
          <div class="gallery"></div>
        </section> */}
      </main>
    </S.Container>
  );
};
