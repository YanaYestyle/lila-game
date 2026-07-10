"use client";
import { useLanguage } from "@/providers/language-provider";
import terms from "./terms.module.scss";
import { Section } from "@/models/translation-config";
import ArrowIcon from "@/components/arrow-icon/ArrowIcon";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const { t } = useLanguage();
  const router = useRouter();

  //TODO: Fix language with back button
  const goBack = () => {
    router.back();
  };

  const sections = t<Section[]>("termsPage.sections");
  const content = t<string[]>("privacyPage.content");

  //TODO: Fix text
  //TODO: To think about date format
  return (
    <div className={terms.container}>
      <div className={terms.column}>
        <div className={terms.title}>
          <span className={terms.back} onClick={goBack}>
            <ArrowIcon direction="left" />
          </span>

          <span>{t("termsPage.title").toUpperCase()}</span>
        </div>

        <div className={terms.content}>
          {content?.map((item, i) => (
            <div key={i}>{item} </div>
          ))}

          {sections.map((section, index) => (
            <section key={index} className={terms.section}>
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

              {section.footer && (
                <a href={`mailto:${section.footer}`} className={terms.email}>
                  {section.footer}
                </a>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
