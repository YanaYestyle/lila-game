import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/providers/language-provider";
import switcher from "./language-switcher.module.scss";

const LanguageSwitcher = () => {
  const { setLanguage, currentLanguage, languages } = useLanguage();
  const router = useRouter();
  const currentPath = usePathname();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    const segments = currentPath.split("/").slice(2);
    const newPath = `/${selectedLanguage}/${segments.join("/")}`;
    router.push(newPath);
    return setLanguage(selectedLanguage);
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleLanguageChange}
      className={switcher.select}
    >
      {languages.map((language) => (
        <option
          key={language.locale}
          value={language.locale}
          className={switcher.option}
        >
          {language.description.toLocaleLowerCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
