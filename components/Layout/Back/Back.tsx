import React from "react";
import Link from "next/link";
import { Props } from "./constants";
import styles from "./Back.module.css";

export const Back = ({ prev, prevLink, current }: Props) => {
  return (
    <div className={styles.container}>
      <Link href={prevLink} className="link">
        {prev}
      </Link>
      <div>|</div>
      <div>{current}</div>
    </div>
  );
};
