"use client";
import { useLanguage } from "@/providers/language-provider";
import home from "./home.module.scss";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <div className={home.container}>
        <div className={home.image}></div>
        <div className={home.column}>
          <h1>{t("greeting")}</h1>
        </div>
      </div>
    </>
  );
}
