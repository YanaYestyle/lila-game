"use client";
import { useLanguage } from "@/providers/language-provider";
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation/navigation";
import { NavigationConfig } from "@/models/navigation";
import description from "./description.module.scss";

export default function Description() {
  const router = useRouter();
  const { t, currentLanguage } = useLanguage();

  const goToBenefits = () => {
    router.push(`/${currentLanguage}/game-rules/benefits`);
  };

  const goToEntry = () => {
    router.push(`/${currentLanguage}/game-rules/entry`);
  };

  const config: NavigationConfig = {
    buttons: [
      {
        variant: "accent",
        text: t("shared.buttons.goBack"),
        navigateTo: goToBenefits,
      },
      {
        variant: "accent",
        text: t("shared.buttons.goNext"),
        icon: true,
        navigateTo: goToEntry,
      },
    ],
    additionalText: t("descriptionPage.goNext"),
  };

  return (
    <div className={description.container}>
      <div className={description.column}>
        <div className={description.title}>
          {t("descriptionPage.title").toUpperCase()}
        </div>
        <div className={description.content}>
          <div>{t("descriptionPage.text")}</div>
          <div className={description.next}>
            <Navigation config={config}></Navigation>
          </div>
        </div>
      </div>
    </div>
  );
}
