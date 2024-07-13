"use client";
import { useLanguage } from "@/providers/language-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Lang = () => {
  const router = useRouter();
  const { defaultLanguage } = useLanguage();

  useEffect(() => {
    router.push(`${defaultLanguage}/home`);
  }, [router]);
};

export default Lang;
