"use client";
import { useLanguage } from "@/providers/language-provider";
import gameRules from "./game-rules.module.scss";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";
import ArrowIcon from "@/components/arrow-icon/arrow-icon";

export default function GameRules() {
  const router = useRouter();
  const { t, currentLanguage } = useLanguage();

  const goBack = () => {
    router.push(`/${currentLanguage}/home`);
  };

  const goToBenefits = () => {
    router.push(`/${currentLanguage}/game-rules/benefits`);
  };

  return (
    <>
      <div className={gameRules.container}>
        <div className={gameRules.image}></div>
        <div className={gameRules.column}>
          <div className={gameRules.title}>
            {t("gameRulesPage.title").toUpperCase()}
          </div>
          <div className={gameRules.content}>
            <div>
              <span>
                <strong>{t("gameRulesPage.boldGameName")}</strong>
              </span>
              <span> {t("gameRulesPage.aboutGame")}</span>
            </div>
            <div className={gameRules.attention}>
              <span>
                <strong>
                  {t("gameRulesPage.attentionTitle").toUpperCase()}
                </strong>
              </span>
              <span> {t("gameRulesPage.attentionText")}</span>
            </div>
            <div className={gameRules.next}>
              <Button variant="accent" onClick={goBack}>
                {t("shared.buttons.goBack")}
              </Button>
              <span> {t("gameRulesPage.goNext")}</span>
              <Button variant="accent" onClick={goToBenefits}>
                <div>
                  <span>{t("shared.buttons.goNext")} </span>
                  <span>
                    <ArrowIcon></ArrowIcon>
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
