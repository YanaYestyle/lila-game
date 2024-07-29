"use client";
import { useLanguage } from "@/providers/language-provider";
import gameRules from "./game-rules.module.scss";
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation/navigation";
import { NavigationConfig } from "@/models/navigation";

export default function GameRules() {
  const router = useRouter();
  const { t, currentLanguage } = useLanguage();

  const goToHome = () => {
    router.push(`/${currentLanguage}/home`);
  };

  const goToBenefits = () => {
    router.push(`/${currentLanguage}/game-rules/benefits`);
  };

  const config: NavigationConfig = {
    buttons: [
      {
        variant: "accent",
        text: t("shared.buttons.goBack"),
        navigateTo: goToHome,
      },
      {
        variant: "accent",
        text: t("shared.buttons.goNext"),
        icon: true,
        navigateTo: goToBenefits,
      },
    ],
    additionalText: t("gameRulesPage.goNext"),
  };

  return (
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
              <strong>{t("gameRulesPage.attentionTitle").toUpperCase()}</strong>
            </span>
            <span> {t("gameRulesPage.attentionText")}</span>
          </div>
          <div className={gameRules.next}>
            <Navigation config={config}></Navigation>
          </div>
        </div>
      </div>
    </div>
  );
}
