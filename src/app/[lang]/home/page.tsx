"use client";
import { useLanguage } from "@/providers/language-provider";
import home from "./home.module.scss";
import Button from "@/components/button/button";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <div className={home.container}>
        <div className={home.image}></div>
        <div className={home.column}>
          <div className={home.title}>
            <div className={home.first}>
              <div className={home.game}>{t("homePage.game")}</div>
            </div>
            <div className={home.second}>
              <div className={home.lila}>
                {t("homePage.lila").toUpperCase()}
              </div>
            </div>
          </div>
          <div className={home.content}>
            <div>{t("homePage.description")}</div>
            <div className={home.buttons}>
              <Button>Rule of the game</Button>
              <Button>Start to play</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
