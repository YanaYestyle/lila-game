"use client";
import { useLanguage } from "@/providers/language-provider";
import privacy from "./privacy.module.scss";
import { Section } from "@/models/translation-config";
import ArrowIcon from "@/components/arrow-icon/ArrowIcon";
import { useRouter } from "next/navigation";

export default function PrivacyPage() {
  const { t } = useLanguage();
  const router = useRouter();

  //TODO: Fix language with back button
  const goBack = () => {
    router.back();
  };

  const sections = t<Section[]>("privacyPage.sections");
  const content = t<string[]>("privacyPage.content");

  //TODO: Fix text
  //TODO: To think about date format
  return (
    <div className={privacy.container}>
      <div className={privacy.column}>
        <div className={privacy.title}>
          <span className={privacy.back} onClick={goBack}>
            <ArrowIcon direction="left" />
          </span>

          <span>{t("privacyPage.title").toUpperCase()}</span>
        </div>

        <div className={privacy.content}>
          {content?.map((item, i) => (
            <div key={i}>{item} </div>
          ))}

          {sections.map((section, index) => (
            <section key={index} className={privacy.section}>
              {section.title && (
                <h3>
                  {index + 1}. {section.title}
                </h3>
              )}

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
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.footer && <p>{section.footer}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
