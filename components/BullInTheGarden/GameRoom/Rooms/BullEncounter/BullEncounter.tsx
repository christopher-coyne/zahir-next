import React, { useEffect, useState } from "react";
import styles from "./BullEcounter.module.css";
import { Props } from "./constants";
import Image from "next/image";

export default function BullEncounter({ iterations, setFullscreen }: Props) {
  const [background, setBackground] = useState("bull-1.png");
  const backgroundUrl = `/bull-in-the-garden/bull/${background}`;

  const play = (file: string) => {
    const bullAudio = new Audio(file);
    bullAudio.volume = 0.5;
    bullAudio.play();
  };

  useEffect(() => {
    if (background === "bull-distort1.png") {
      play("/bull-in-the-garden/audio/bull-3v2.wav");
      setFullscreen(true);
    }
    return () => {
      setFullscreen(false);
    };
  }, [background, setFullscreen]);

  if (background === "bull-1.png") {
    if (iterations === 1) {
      play("/bull-in-the-garden/audio/bull-1.wav");
    }
    setTimeout(() => {
      setBackground("bull-mutated.png");
    }, 1500);
  } else {
    if (background === "bull-mutated.png") {
      if (iterations === 2) {
        play("/bull-in-the-garden/audio/bull-2.wav");
      }
      setTimeout(() => setBackground("bull-distort1.png"), 1500);
    }
  }

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
        <Image
          src={backgroundUrl}
          alt="bull"
          width={background === "bull-1.png" ? "270" : "400"}
          height={background === "bull-1.png" ? "150" : "400"}
        />
      )}
    </div>
  );
}
