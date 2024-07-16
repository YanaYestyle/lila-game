import { Language } from "@/models/language";
import { usePathname } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const translations: Record<string, Record<string, string>> = {
  en: require("../../public/locales/en/common.json"),
  pl: require("../../public/locales/pl/common.json"),
  ru: require("../../public/locales/ru/common.json"),
};

const defaultLanguageSchema: Language = {
  languages: [
    { locale: "en", description: "English" },
    { locale: "pl", description: "Polski" },
    { locale: "ru", description: "Русский" },
  ],
  defaultLanguage: "en",
  currentLanguage: "",
  setLanguage: function (language: string): void {
    throw new Error("Function not implemented.");
  },
  t: function (key: string): string {
    throw new Error("Function not implemented.");
  },
};

const LanguageContext = createContext<Language>(defaultLanguageSchema);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || defaultLanguageSchema.defaultLanguage;
    }
    const lang = pathname.split("/")[1];
    return lang && defaultLanguageSchema.languages.map((lang) => lang.locale).includes(lang)
      ? lang
      : defaultLanguageSchema.defaultLanguage;
  });

  useEffect(() => {
    const lang = pathname.split("/")[1]; 
    if (
      lang &&
      defaultLanguageSchema.languages?.map((lang) => lang.locale).includes(lang)
    ) {
      setCurrentLanguage(lang);
    }
  }, [pathname]);

  const setLanguage = (lang: string) => {
    localStorage.setItem("language", lang);
    return setCurrentLanguage(lang);
  };

  const getNestedTranslation = (obj: any, key: string): string => {
    return key.split(".").reduce((o, i) => o[i], obj);
  };

  const t = (key: string) => {
    return getNestedTranslation(translations[currentLanguage], key) || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        languages: defaultLanguageSchema.languages,
        defaultLanguage: defaultLanguageSchema.defaultLanguage,
        currentLanguage,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): Language => useContext(LanguageContext);
