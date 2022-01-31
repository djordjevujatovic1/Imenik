import React from "react";
import styles from "./NewModal.module.css";

const NewModal = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.stopEditing();
  };

  return (
    <>
      <div onClick={() => props.stopEditing()} className={styles.backdrop} />
      <div className={styles.newModal}>
        <div>
          <h3>Uredi korisnika</h3>
        </div>
        <form onSubmit={formSubmitHandler}>
          <div className={styles.input}>
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ime"
              value={props.enteredUsername}
              onChange={(e) =>
                props.setUpdateUsername(e.target.value, props.id)
              }
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="userlastname"></label>
            <input
              type="text"
              id="userlastname"
              name="userlastname"
              placeholder="Prezime"
              value={props.enteredLastname}
              onChange={(e) =>
                props.setUpdateLastname(e.target.value, props.id)
              }
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={props.enteredEmail}
              onChange={(e) => props.setUpdateEmail(e.target.value, props.id)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="phone"></label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Broj Telefona"
              value={props.enteredNumber}
              onChange={(e) => props.setUpdateNumber(e.target.value, props.id)}
            />
          </div>
          <button className={styles.btn}>Sacuvaj kontakt</button>
        </form>
      </div>
    </>
  );
};

export default NewModal;
