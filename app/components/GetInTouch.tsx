import Image from "next/image";
import styles from "./getInTouch.module.css";

export const GetInTouch = () => {
  return (
    <section id="get-in-touch" className={styles.section}>
    <h3 className={styles.heading}>Get In Touch</h3>
    <p>I&apos;m always open to discussing new opportunities, creative projects, or potential collaborations. Whether you&apos;re a startup looking to build your first product or an established company seeking to innovate, I&apos;m here to help.</p>

      <div className={styles.profileContainer}>
        <Image
          src="/jani.jpeg"
          alt="Contact Me"
          width={150}
          height={150}
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <p className={styles.name}>Jani Behm</p>
          <p className={styles.title}>Web Developer</p>
        </div>
      </div>
      
      <p>You can contact me anytime! Let&apos;s talk and bring your vision to life.</p>
    </section>
  );
}
