import Image from "next/image";
import styles from "./Navbar.module.css";
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
