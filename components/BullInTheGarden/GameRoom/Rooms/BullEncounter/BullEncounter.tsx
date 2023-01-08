import React, { useState } from "react";
import styles from "./BullEcounter.module.css";
import { Props } from "./constants";
import Image from "next/image";

export default function BullEncounter({ iterations }: Props) {
  const [background, setBackground] = useState("bull-1.png");
  const backgroundUrl = `/bull-in-the-garden/bull/${background}`;

  if (background === "bull-1.png") {
    setTimeout(() => setBackground("bull-mutated.png"), 1000);
  } else {
    if (background === "bull-mutated.png") {
      setTimeout(() => setBackground("bull-distort1.png"), 1000);
    } else {
      setTimeout(() => {
        if (background === "bull-distort1.png") {
          setBackground("bull-distort2.png");
        } else {
          setBackground("bull-distort1.png");
        }
      }, 100);
    }
  }
  console.log("url ", backgroundUrl);
  return (
    <div className={styles.container}>
      <Image src={backgroundUrl} alt="bull" width="500" height="300" />
    </div>
  );
}

/*
      style={{
        backgroundImage: `url("${backgroundUrl}")`,
      }}
      */
