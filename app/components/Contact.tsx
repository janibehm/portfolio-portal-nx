import Form from "./Form"
import { GetInTouch } from "./GetInTouch";
import styles from "./contact.module.css"

export const Contact = () => {
  return (
    <section id="contact">
      <h2 className={styles.heading}>Let&apos;s Work Together</h2>
      <p className={styles.description}>
        Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring your ideas to life.</p>

      <div className={styles.wrapper}>
        <GetInTouch />
        <Form />
      </div>

    </section>
  );
}
