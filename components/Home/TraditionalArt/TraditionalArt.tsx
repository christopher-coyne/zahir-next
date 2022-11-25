import styles from "./TraditionalArt.module.css";
import Image from "next/image";
import Link from "next/link";
import { TypeFlags } from "typescript";
export const TraditionalArt = () => {
  const thumbnails = [
    "Falling Through",
    "Creation",
    "Birds and Fishes",
    "The Angel",
    "Prospero",
    "Palms",
  ];
  return (
    <div className={styles.gridContainer}>
      {thumbnails.map((name) => (
        <div className={styles.thumbnailContainer} key={name}>
          <div className={styles.imgContainer}>
            <Link href={`/artwork/${name}`}>
              <Image
                src={`/thumbnails/${name}.png`}
                alt={name}
                fill
                className={styles.img}
              />
            </Link>
          </div>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>{name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
