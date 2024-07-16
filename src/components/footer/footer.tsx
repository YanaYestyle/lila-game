import Image from "next/image";
import footer from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={footer.container}>
      <hr className={footer.divider} />
      <div className={footer.content}>
        <div className={footer.text}>© yanayestyle@gmail.com</div>
        <div className={footer.images}>
          <Image
            src="/icons/instagram.svg"
            alt="Feather logo"
            width={20}
            height={20}
            priority={false}
          ></Image>
          <Image
            src="/icons/telegram.svg"
            alt="Feather logo"
            width={20}
            height={20}
            priority={false}
          ></Image>
          <Image
            src="/icons/whatsapp.svg"
            alt="Feather logo"
            width={20}
            height={20}
            priority={false}
          ></Image>
        </div>
      </div>
    </div>
  );
}
