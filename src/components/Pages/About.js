import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <p className={styles.opisAp}>
        Ova aplikacija je uradjena koristenjem React biblioteke.
        <br></br>
        Svrha aplikacije je skladistenje podataka o korisniku: ime, prezime,
        email i broj telefona. Takodje je moguce brisati korisnike i uredjivati
        vec postojece.
      </p>
    </div>
  );
};

export default About;
