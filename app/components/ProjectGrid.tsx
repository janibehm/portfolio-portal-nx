import Image from "next/image";
import styles from "./projects.module.css";
import { fetchProjects } from "../services/projectService";
import { ProcessedProject } from "../types/project";

export const ProjectGrid = async () => {
    const projects = await fetchProjects();
    
    return (
        <div className={styles.projectGrid}>
            {projects.map((project: ProcessedProject, index: number) => (
                <div key={index} className={styles.projectCard}>
                    <Image
                        className={styles.projectImage}
                        src={project.src}
                        alt={project.alt}
                        height={1000}
                        width={1000}
                    />
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectLinks}>
                        <a
                            href={project.githubLink}
                            className={`${styles.projectLink} ${styles.secondaryLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href={project.liveLink}
                            className={`${styles.projectLink} ${styles.primaryLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
