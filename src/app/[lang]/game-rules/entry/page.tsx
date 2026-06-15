"use client";
import { useLanguage } from "@/providers/language-provider";
import entry from "./entry.module.scss";
import { useRouter } from "next/navigation";
import { NavigationConfig } from "@/models/navigation";
import Navigation from "@/components/navigation/navigation";

export default function Entry() {
  const router = useRouter();
  const { t, currentLanguage } = useLanguage();

  const goToDescription = () => {
    router.push(`/${currentLanguage}/game-rules/description`);
  };

  const goToEntry = () => {
    router.push(`/${currentLanguage}/game-rules/entry`);
  };

  const config: NavigationConfig = {
    buttons: [
      {
        variant: "accent",
        text: t("shared.buttons.goBack"),
        navigateTo: goToDescription,
      },
      {
        variant: "accent",
        text: t("shared.buttons.goNext"),
        icon: true,
        navigateTo: goToEntry,
      },
    ],
    additionalText: t("entryPage.goNext"),
  };

  return (
    <div className={entry.container}>
      <div className={entry.image}>
        <video src="/video/dice.mp4" autoPlay loop muted />
      </div>
      
        <div className={entry.column}>
          <div className={entry.title}>
            {t("entryPage.title").toUpperCase()}
          </div>
          <div className={entry.content}>
            {t("entryPage.text")} {t("entryPage.text")} {t("entryPage.text")}
            <div className={entry.next}>
              <Navigation config={config}></Navigation>
            </div>
          </div>
        
      </div>
    </div>
  );
}
