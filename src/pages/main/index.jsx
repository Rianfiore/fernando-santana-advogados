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
  GiPistolGun,
  RiShieldUserFill,
} from "../../img";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { Carousel } from "../../components/carousel";
import { Icon } from "../../components/icon";

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
  {
    color: "secondary",
    icon: <GiPistolGun size="5vw" color="#fbce33" />,
    title: "Direito Criminal",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
  {
    color: "primary",
    icon: <RiShieldUserFill size="5vw" color="#fbce33" />,
    title: "Defesa do Consumidor",
    subtitle:
      "Mauris dictum dictum pulvinar. Etiam non rutrum ligula, sit amet porttitor massa. Nullam nec erat eu ex tincidunt fermentum. Etiam quis nunc eget quam mollis rhoncus. Pellentesque eu tristique massa. Ut eget elementum mi, ut tristique metus. Suspendisse auctor blandit molestie.",
    buttonContent: "Saiba mais",
  },
];

export const Main = () => {
  return (
    <S.Container>
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
          <Button typeButton="text" content="Entrar em contato" />
        </section>
        <section className="specialties">
          <Carousel>
            {data.map((el, index) => {
              return (
                <Card
                  key={index}
                  color={el.color}
                  icon={el.icon}
                  title={el.title}
                  subtitle={el.subtitle}
                >
                  <Button typeButton="text" content={el.buttonContent} />
                </Card>
              );
            })}
          </Carousel>
        </section>
        <section className="awards">
          <div className="content">
            <div className="title">
              <h2>Premiações</h2>
              <hr></hr>
            </div>
            <p>
              In eu justo eu lectus tristique efficitur. Nunc malesuada sagittis
              mauris ut sodales. Etiam vulputate nibh sit amet libero finibus
              egestas. Proin malesuada volutpat gravida. Nullam quis dolor eget
              nisi tincidunt mattis. Mauris risus magna, rutrum et lacus vel,
              interdum aliquam odio. Nunc laoreet tincidunt tortor, vitae
              posuere purus. Proin porttitor mi a libero scelerisque hendrerit.
              Aliquam consequat turpis justo, non porttitor quam consectetur sit
              amet. Proin at facilisis sem. Nunc eros metus, faucibus vitae
              fringilla facilisis, auctor vel elit.
            </p>
            <Button typeButton="text" content="Entrar em contato" />
          </div>
          <div className="gallery">
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
          </div>
        </section>
      </main>
    </S.Container>
  );
};
