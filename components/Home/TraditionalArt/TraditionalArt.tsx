import styles from "./TraditionalArt.module.css";
import Image from "next/image";
import { TypeFlags } from "typescript";
export const TraditionalArt = () => {
  const thumbnails = [
    "Bull",
    "Creation",
    "Birds & Fishes",
    "The Angel",
    "Prospero",
    "Palms",
  ];
  return (
    <div className={styles.gridContainer}>
      {thumbnails.map((name) => (
        <div className={styles.thumbnailContainer} key={name}>
          <div className={styles.imgContainer}>
            <Image
              src="/thumbnails/Falling Through.png"
              alt="falling through"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>{name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
