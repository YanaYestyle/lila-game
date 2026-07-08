"use client";
import NotFound from "@/components/not-found/NotFound";
import { LanguageProvider } from "@/providers/language-provider";

export default function PageNotFound() {
  return (
    <LanguageProvider>
      <NotFound />
    </LanguageProvider>
  );
}
