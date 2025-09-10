import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>PORTFOLIO <br/> PORTAL</h1>
        <p className={styles.description}>
          I craft digital experiences that blend beautiful design with functionality.
          Specializing in modern web applications that scale.
      </p>
      <div className={styles.buttonWrapper}>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.buttonPrimary}>View CV</a>
      </div>
    </header>
    </div>
  );
}