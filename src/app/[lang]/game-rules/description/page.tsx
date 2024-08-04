"use client";
import { useLanguage } from "@/providers/language-provider";
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation/navigation";
import { NavigationConfig } from "@/models/navigation";
import description from "./description.module.scss";

export default function Description() {
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
    <div className={description.container}>
      <div className={description.column}>
        <div className={description.title}>
          {t("descriptionPage.title").toUpperCase()}
        </div>
        <div className={description.content}>
          <div>Игра начинается с запроса. То есть зачем Вы начинаете играть, на какой вопрос Вам нужен ответ или какую проблему хотите решить. 
            Примеры запросов: Что мне нужно сделать, чтобы встретить мужчину/женщину для гармоничных отношений?
            Что мне нужно сделать, чтобы продвинуться по карьерной лестнице?

            Также это могут быть вопросы на познания себя. Например, как стать уверенным/уверенной? Как простить обиду?

            Или совсем бытовые - стоит ли мне сделать первым/первой шаг (к примерению, свиданию и т.д.)?

            Важно, чтобы запрос был простым и понятным.
            
            Далее в игру вступает игральный кубик...
            
            </div>
          <div className={description.next}>
            <Navigation config={config}></Navigation>
          </div>
        </div>
      </div>
    </div>
  );
}
