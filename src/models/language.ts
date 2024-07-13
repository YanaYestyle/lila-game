export interface Locales {
  locale: string;
  description: string;
}

export interface Language {
  languages: Locales[];
  defaultLanguage: string;
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}
