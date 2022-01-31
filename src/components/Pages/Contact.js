import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <form
        action="https://formsubmit.co/vujatovic.djordje@gmail.com"
        method="POST"
        className={styles.poruka}
      >
        <div>
          <label htmlFor="ime">Ime</label>
          <input type="text" id="ime" placeholder="Ime" size={40} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="poruka">Vasa poruka</label>
          <textarea
            type="text"
            id="poruka"
            cols={40}
            rows={10}
            placeholder="Poruka"
            required
          />
        </div>
        <button className={styles.contactBtn}>Posalji poruku</button>
      </form>
    </div>
  );
};

export default Contact;
