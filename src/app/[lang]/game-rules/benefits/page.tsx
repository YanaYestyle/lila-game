"use client";
import "./benefits.scss";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/providers/language-provider";
import Navigation from "@/components/navigation/navigation";
import { NavigationConfig } from "@/models/navigation";

export default function Benefits() {
  const router = useRouter();
  const { t, currentLanguage } = useLanguage();

  const goToGameRules = () => {
    router.push(`/${currentLanguage}/game-rules`);
  };

  const goToDescriptionGameRules = () => {
    router.push(`/${currentLanguage}/game-rules/description`);
  };

  const config: NavigationConfig = {
    buttons: [
      {
        variant: "accent",
        text: t("shared.buttons.goBack"),
        navigateTo: goToGameRules,
      },
      {
        variant: "accent",
        text: t("shared.buttons.goNext"),
        icon: true,
        navigateTo: goToDescriptionGameRules,
      },
    ],
    additionalText: t("benefitsPage.goNext"),
  };
  return (
    <div className="container">
      <div className="column">
        <div className="title">{t("benefitsPage.title")}</div>
        <div className="content">
          <Navigation config={config}></Navigation>
        </div>
      </div>
      <div className="image">
        <div className="animate option glow delay-1">
          <span>{t("benefitsPage.firstOption").toLowerCase()}</span>
        </div>
        <div className="animate option glow delay-2">
          <span>{t("benefitsPage.secondOption").toLowerCase()}</span>
        </div>
        <div className="animate option glow delay-3">
          <span>{t("benefitsPage.thirdOption").toLowerCase()}</span>
        </div>
      </div>
    </div>
  );
}
