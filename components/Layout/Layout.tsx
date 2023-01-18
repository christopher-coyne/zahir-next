import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
