import React, { useEffect, useState } from "react";
import styles from "./BullEcounter.module.css";
import { Props } from "./constants";
import Image from "next/image";

export default function BullEncounter({ iterations, setFullscreen }: Props) {
  const [background, setBackground] = useState("bull-1.png");
  const backgroundUrl = `/bull-in-the-garden/bull/${background}`;

  useEffect(() => {
    if (background === "bull-distort1.png") {
      console.log("set full screen");
      setFullscreen(true);
    }
    return () => {
      setFullscreen(false);
    };
  }, [background, setFullscreen]);

  if (background === "bull-1.png") {
    setTimeout(() => setBackground("bull-mutated.png"), 1000);
  } else {
    if (background === "bull-mutated.png") {
      setTimeout(() => setBackground("bull-distort1.png"), 1000);
    }
  }
  console.log("url ", backgroundUrl);
  return (
    <div className={styles.container}>
      {background === "bull-distort1.png" ? (
        <video autoPlay muted width="100%" height="100%" loop>
          <source
            src="/bull-in-the-garden/bull/final_bull.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <Image src={backgroundUrl} alt="bull" width="500" height="300" />
      )}
    </div>
  );
}
