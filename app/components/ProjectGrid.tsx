import Image from "next/image";
import styles from "./projects.module.css";
const projects = [
	{
		src: "/project-images/behm_digital.webp",
		alt: "Behm Digital",
		title: "Behm Digital",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim risus cursus nulla, vitae convallis enim urna eu erat.",
	},
	{
		src: "/project-images/highlandway.webp",
		alt: "Highland Way",
		title: "Highland Way",
		description:
			"Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
	},
	{
		src: "/project-images/instruments.webp",
		alt: "Instruments",
		title: "Instruments",
		description:
			"Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
	},
	{
		src: "/project-images/aurora_digital.webp",
		alt: "Aurora Digital",
		title: "Aurora Digital",
		description:
			"Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.",
	},
	{
		src: "/project-images/prometheus.webp",
		alt: "Prometheus",
		title: "Prometheus",
		description:
			"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt.",
	},
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
						height={1000}
						width={1000}
					/>
					<h2 className={styles.projectTitle}>{project.title}</h2>
					<p className={styles.projectDescription}>{project.description}</p>
					<div className={styles.projectLinks}>
						<a
							href={"https://github.com/"}
							className={
								styles.projectLink + " " + styles.secondaryLink
							}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						<a
							href={"https://example.com/"}
							className={
								styles.projectLink + " " + styles.primaryLink
							}
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
