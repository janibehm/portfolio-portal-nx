import Image from "next/image";
import styles from "./projects.module.css";
const projects = [
  { src: "/project-images/behm_digital.webp", alt: "Behm Digital" },
  { src: "/project-images/highlandway.webp", alt: "Highland Way" },
  { src: "/project-images/instruments.webp", alt: "Instruments" },
  { src: "/project-images/aurora_digital.webp", alt: "Aurora Digital" },
  { src: "/project-images/prometheus.webp", alt: "Prometheus" },
];

export const ProjectGrid = () => {
  return (
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              className={styles.projectImage}
              src={project.src}
              alt={project.alt}
              height={200}
              width={300}
            />
          </div>
        ))}
      </div>
  );
}
