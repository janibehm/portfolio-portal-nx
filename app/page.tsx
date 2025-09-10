import styles from "./page.module.css";
import { ProjectGrid } from "./components/ProjectGrid";
import { Header } from "./components/Header";
import { Contact }  from "./components/Contact";



export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <ProjectGrid />
      </main>

      <Contact />

     
    </div>
  );
}
