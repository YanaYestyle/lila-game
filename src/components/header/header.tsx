import header from "./header.module.scss";

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={header.container}>header {children}</div>;
}
