"use client";
import { useLanguage } from "@/providers/language-provider";
import terms from "./terms.module.scss";
import { Section } from "@/models/translation-config";
import ArrowIcon from "@/components/arrow-icon/ArrowIcon";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const { t } = useLanguage();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const sections = t<Section[]>("termsPage.sections");

  //TODO: Fix text
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
          <span>{t("termsPage.content")}</span>

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
