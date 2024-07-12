export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>header {children}</div>;
}
