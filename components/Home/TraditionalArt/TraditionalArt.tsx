import styles from "./TraditionalArt.module.css";
import Image from "next/image";
export const TraditionalArt = () => {
  const thumbnails = [
    {
      title: "Falling Through",
      link: "https://www.instagram.com/p/Cke166WgvYd/",
    },
    { title: "Creation", link: "https://www.instagram.com/p/CkezxvDASsW/" },
    {
      title: "Birds and Fishes",
      link: "https://www.instagram.com/p/CkeyvZogKM9/",
    },
    { title: "The Angel", link: "https://www.instagram.com/p/Cke166WgvYd/" },
    { title: "Prospero", link: "https://www.instagram.com/p/Cke1Esrgmms/" },
    { title: "Palms", link: "https://www.instagram.com/p/CkHrv8TL5wo/" },
    { title: "Bull", link: "https://www.instagram.com/p/CkezFR0gY-a/" },
    {
      title: "Remain In Light",
      link: "https://www.instagram.com/p/Cke0h-FgdBT/",
    },
    { title: "Memory", link: "https://www.instagram.com/p/CkezxvDASsW/" },
  ];
  return (
    <div className={styles.gridContainer}>
      {thumbnails.map((thumbnail) => (
        <a
          href={thumbnail.link}
          target="_blank"
          rel="noreferrer"
          key={thumbnail.title}
        >
          <div className={styles.thumbnailContainer}>
            <div className={styles.imgContainer}>
              <Image
                src={`/thumbnails/${thumbnail.title}.png`}
                alt={thumbnail.title}
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.titleContainer}>
              <h4 className={styles.title}>{thumbnail.title}</h4>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
