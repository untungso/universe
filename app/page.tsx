import { Montserrat } from "next/font/google";
import styles from "./page.module.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={montserrat.className}>
          New website is underway&nbsp;
          <code className={styles.code}>under construction</code>
        </p>
      </div>
    </main>
  );
}
