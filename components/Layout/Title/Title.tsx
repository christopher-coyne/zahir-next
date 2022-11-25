import { Props } from "./constants";
import styles from "./Title.module.css";

export function Title({ text }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text}</h1>
      <hr className={styles.break} />
    </div>
  );
}
