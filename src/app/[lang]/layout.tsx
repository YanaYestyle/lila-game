"use client";
import Header from "@/components/header/header";
import LanguageSwitcher from "@/components/language-switcher/language-switcher";
import { LanguageProvider } from "@/providers/language-provider";

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <Header>
        <LanguageSwitcher />
      </Header>
      {children}
    </LanguageProvider>
  );
}
