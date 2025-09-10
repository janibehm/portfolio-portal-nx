"use client"
import styles from "./form.module.css"
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID as string);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" className={styles.input} />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="surname">Surname</label>
      <input id="surname" type="text" name="surname" className={styles.input} />
      <ValidationError prefix="Surname" field="surname" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" className={styles.input} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" className={styles.textarea} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} className={styles.button}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
