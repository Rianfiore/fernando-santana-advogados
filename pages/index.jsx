import * as S from "../styles";
import { Carousel, Button, Card, Icon } from "../components";
import { specialties } from "../data/specialties";
import ExportedImage from "next-image-export-optimizer";

export default function Home() {
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
              <h1>Experiência</h1>
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
              <h1>Confiança</h1>
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
            {specialties.map((el, index) => {
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
}
