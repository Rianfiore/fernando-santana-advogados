import * as S from "../styles";
import { Carousel, Button, Card, Icon } from "../components";
import specialties from "/data/Specialties";
import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import ptBR from "/locales/pt-BR";
import enUS from "/locales/en-US";

export default function Home() {
  const router = useRouter(),
    { locale } = router,
    t = locale === "pt-BR" ? ptBR : enUS,
    translate = t.body.main.home;
  return (
    <S.Container>
      <main>
        <section className="banner">
          <div className="background"></div>
          <div className="textBox">
            <figure className="mainIcon">
              <div className="img">
                <ExportedImage
                  src="./icons/libra.svg"
                  alt="Balança da justiça"
                  layout="responsive"
                  width={"100%"}
                  height={"100%"}
                  unoptimized={true}
                />
              </div>
            </figure>
            <div className="title">
              <h1>{translate.main.title1}</h1>
              <figure className="prismIcon">
                <div className="img">
                  <ExportedImage
                    src="./icons/prism.svg"
                    alt="Separador de texto"
                    layout="responsive"
                    width={"100%"}
                    height={"100%"}
                    unoptimized={true}
                  />
                </div>
              </figure>
              <h1>{translate.main.title2}</h1>
              <figure className="prismIcon">
                <div className="img">
                  <ExportedImage
                    src="./icons/prism.svg"
                    alt="Separador de texto"
                    layout="responsive"
                    width={"100%"}
                    height={"100%"}
                    unoptimized={true}
                  />
                </div>
              </figure>
              <h1>{translate.main.title3}</h1>
            </div>
            <p className="subtitle">{translate.main.subtitle}</p>
          </div>
          <Button typeButton="text" content={translate.main.button} />
        </section>
        <section className="specialties">
          <Carousel length={specialties().length}>
            {specialties().map((el, index) => {
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
              <h2>{translate.awards.title}</h2>
              <hr></hr>
            </div>
            <p>{translate.awards.subtitle}</p>
            <Button typeButton="text" content={translate.awards.button} />
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
}
