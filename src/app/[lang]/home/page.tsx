"use client";
import { useLanguage } from "@/providers/language-provider";
import home from "./home.module.scss";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { t, currentLanguage } = useLanguage();

  const goToGameRules = () => {
    router.push(`/${currentLanguage}/game-rules`);
  };

  const goToOnePlayerGame = () => {
    router.push(`/${currentLanguage}/one-player-game`);
  };

  return (
    <div className={home.container}>
      <div className={home.image}></div>
      <div className={home.column}>
        <div className={home.title}>
          <div className={home.first}>
            <div className={home.game}>{t("homePage.game")}</div>
          </div>
          <div className={home.second}>
            <div className={home.lila}>{t("homePage.lila").toUpperCase()}</div>
          </div>
        </div>
        <div className={home.content}>
          <div>{t("homePage.description")}</div>
          <div className={home.buttons}>
            <Button onClick={goToGameRules}>
              {t("homePage.buttons.gameRules")}
            </Button>
            <Button onClick={goToOnePlayerGame}>
              {t("homePage.buttons.startSoloGame")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
