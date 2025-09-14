import { Suspense } from "react";
import styles from "./page.module.css";
import { ProjectGrid } from "./components/ProjectGrid";
import { Header } from "./components/Header";
import { Contact }  from "./components/Contact";

// ISR: Revalidate this page every 60 seconds
export const revalidate = 60;

// Force static generation with ISR
export const dynamic = 'force-static';

function ProjectsLoading() {
  return (
    <div className={styles.projectGrid}>
      <div>Loading projects...</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Suspense fallback={<ProjectsLoading />}>
          <ProjectGrid />
        </Suspense>
      </main>

      <Contact />
    </div>
  );
}
