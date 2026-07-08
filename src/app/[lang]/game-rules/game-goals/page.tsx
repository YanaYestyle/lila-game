"use client";
import { useLanguage } from "@/providers/language-provider";
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation/Navigation";
import { NavigationConfig } from "@/models/navigation";
import gameGoals from "./game-goals.module.scss";
import { Section } from "@/models/translation-config";

export default function GameGoals() {
  const router = useRouter();
  const { t, currentLanguage } = useLanguage();

  const goToGameBoard = () => {
    router.push(`/${currentLanguage}/game-rules/game-board`);
  };

  const goToOnePlayerGame = () => {
    router.push(`/${currentLanguage}/one-player-game`);
  };

  const config: NavigationConfig = {
    buttons: [
      {
        variant: "accent",
        text: t("shared.buttons.goBack"),
        navigateTo: goToGameBoard,
      },
      {
        variant: "glow",
        text: t("homePage.buttons.startSoloGame"),
        navigateTo: goToOnePlayerGame,
      },
    ],
    additionalText: t("gameGoalsPage.goNext"),
  };

  const sections = t<Section[]>("gameGoalsPage.sections");

  return (
    <div className={gameGoals.container}>
      <div className={gameGoals.column}>
        <div className={gameGoals.title}>
          {t("gameGoalsPage.title").toUpperCase()}
        </div>
        <div className={gameGoals.content}>
          <span> {t("gameGoalsPage.content")}</span>
          {sections.map((section, index) => (
            <section key={index} className={gameGoals.section}>
              {section.content &&
                (Array.isArray(section.content) ? (
                  section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))
                ) : (
                  <p>{section.content}</p>
                ))}

              {section.list && (
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i}>{item} </li>
                  ))}
                </ul>
              )}
              {section.footer && <p>{section.footer}</p>}
            </section>
          ))}
          <div className={gameGoals.next}>
            <Navigation config={config}></Navigation>
          </div>
        </div>
      </div>
    </div>
  );
}
