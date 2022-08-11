import { useLang } from "/context/useLanguage";
import { useRouter } from "next/router";
import { paths } from "/locales";

export default function About() {
  let translate = useLang().initialLanguage.body.pages.home;
  let router = useRouter();
  router.basePath = paths.contact;
  return <h1>{translate.main.title}</h1>;
}
