import { useRouter } from "next/navigation";
import header from "./header.module.scss";
import Image from "next/image";
import { useLanguage } from "@/providers/language-provider";

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { currentLanguage } = useLanguage();

  const goHome = () => {
    router.push(`/${currentLanguage}/home`);
  };

  return (
    <>
      <div className={header.container}>
        <Image
          src="/icons/feather.svg"
          alt="Feather logo"
          width={25}
          height={25}
          priority={false}
          onClick={goHome}
        ></Image>

        {children}
      </div>
      <hr className={header.divider} />
    </>
  );
}
