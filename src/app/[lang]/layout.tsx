"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import LanguageSwitcher from "@/components/language-switcher/LanguageSwitcher";
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
      <Footer></Footer>
    </LanguageProvider>
  );
}
