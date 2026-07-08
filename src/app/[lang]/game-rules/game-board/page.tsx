"use client";
import { useLanguage } from "@/providers/language-provider";
import gameBoard from "./game-board.module.scss";
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation/Navigation";
import { NavigationConfig } from "@/models/navigation";
import { Section } from "@/models/translation-config";

export default function GameBoard() {
  const router = useRouter();
  const { t, currentLanguage } = useLanguage();

  const goToEntry = () => {
    router.push(`/${currentLanguage}/game-rules/entry`);
  };

  const goToGameGoals = () => {
    router.push(`/${currentLanguage}/game-rules/game-goals`);
  };

  const config: NavigationConfig = {
    buttons: [
      {
        variant: "accent",
        text: t("shared.buttons.goBack"),
        navigateTo: goToEntry,
      },
      {
        variant: "accent",
        text: t("shared.buttons.goNext"),
        icon: true,
        navigateTo: goToGameGoals,
      },
    ],
    additionalText: t("gameBoardPage.goNext"),
  };

  const sections = t<Section[]>("gameBoardPage.sections");

  return (
    <div className={gameBoard.container}>
      <div className={gameBoard.image}></div>
      <div className={gameBoard.column}>
        <div className={gameBoard.title}>
          {t("gameBoardPage.title").toUpperCase()}
        </div>
        <div className={gameBoard.content}>
          <span> {t("gameBoardPage.content")}</span>
          {sections.map((section, index) => (
            <section key={index} className={gameBoard.section}>
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

              {section.items?.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <h4>{item.title}</h4>

                  {item.content && <p>{item.content}</p>}

                  {item.listContentDetails && (
                    <ul>
                      {item.listContentDetails.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {section.footer && <p>{section.footer}</p>}
            </section>
          ))}
          <div className={gameBoard.next}>
            <Navigation config={config}></Navigation>
          </div>
        </div>
      </div>
    </div>
  );
}
