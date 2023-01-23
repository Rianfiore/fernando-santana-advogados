import * as S from "/styles/about";

import { useLang } from "/context/useLanguage";
import { useRouter } from "next/router";
import { paths } from "/locales";
import Button from "/components/button";

export default function About() {
  let translate = useLang().initialLanguage.body.pages.aboutUs;
  let router = useRouter();
  router.basePath = paths.aboutUs;
  return (
    <S.Container>
      <main>
        <section className="about-us">
          <div className="content">
            <div className="title">
              <h1>Sobre Nós</h1>
              <hr></hr>
            </div>
            <p>
              Aliquam maximus volutpat turpis, accumsan elementum tellus aliquam
              euismod. In vel arcu id nunc aliquet placerat a nec lectus. Sed
              tincidunt ac metus vitae bibendum. Sed auctor dolor eu est
              rhoncus, eget facilisis felis tristique. Cras consequat enim a
              orci ultrices, sollicitudin suscipit leo viverra. Nulla interdum
              urna et ex dictum hendrerit. Nullam vehicula in ipsum ut sagittis.
              Phasellus eget placerat justo. Aenean ultrices enim neque, nec
              facilisis ipsum dapibus et. Etiam eu dui sit amet diam porta
              accumsan. Praesent at pharetra risus, eget venenatis enim. Nam
              aliquet ante et dolor ullamcorper tristique. Curabitur nec ante eu
              ipsum malesuada tincidunt. Fusce volutpat sem vitae felis rhoncus
              elementum. Etiam vel convallis purus. Integer vestibulum congue
              ligula finibus dapibus.
            </p>
          </div>
          <div className="image"></div>
        </section>
        <section className="address">
          <iframe src=""></iframe>
          <div className="map">
            <div className="content">
              <figure className="lobby-photo"></figure>
              <div className="address-text">
                <h2>Rua Senador Dantas, nº 7, 12º andar</h2>
                <h2>Rio de Janeiro/RJ</h2>
              </div>
              <div className="title">
                <h2>Onde estamos?</h2>
              </div>
            </div>
          </div>
          <div className="cta-area">
            <Button typeButton="text" content="CTA" />
          </div>
        </section>
      </main>
    </S.Container>
  );
}
