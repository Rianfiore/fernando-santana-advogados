import { useRouter } from "next/router";
import { useLang } from "/context/useLanguage";
import { useEffect } from "react";
import { paths } from "/locales";

export default function Index() {
  const router = useRouter();
  const locale = useLang().initialLanguage.locale;
  let isWindowRender = useLang().isWindowRender;

  useEffect(() => {
    if (isWindowRender) {
      router.push(`${locale + paths.home}`);
    }
  }, [isWindowRender, router, locale]);

  return null;
}
