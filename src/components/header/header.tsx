import header from "./header.module.scss";
import Image from "next/image";

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={header.container}>
        <Image
          src="/icons/feather.svg"
          alt="Feather logo"
          width={25}
          height={25}
          priority={false}
        ></Image>

        {children}
      </div>
      <hr className={header.divider} />
    </>
  );
}
