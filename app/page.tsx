import Image from "next/image";
import styles from "./page.module.css";
import { ProjectGrid } from "./components/ProjectGrid";



export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          PORTAL <br/> PORTFOLIO
        </h1>
        <div className={styles.descriptionWrapper}>
        <p className={styles.description}>
          I craft digital experiences that blend beautiful design with functionality. 
          Specializing in modern web applications that scales.
        </p>
        </div>
           <div className={styles.buttonWrapper}>
           <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.buttonPrimary}>View CV</a>
        </div>
          <ProjectGrid />
      </main>
  
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
