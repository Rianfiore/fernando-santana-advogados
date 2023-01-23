import { useLang } from "/context/useLanguage";
import { useRouter } from "next/router";
import { paths } from "/locales";

export default function Squad() {
  let translate = useLang().initialLanguage.body.pages.home;
  let router = useRouter();
  router.basePath = paths.squad;
  return <h1>{translate.main.title}</h1>;
}
