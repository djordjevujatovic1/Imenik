import React, { useState } from "react";
import styles from "./InputUser.module.css";

const InputUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredLastname, setEnteredLastname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(event.target.value);
  };

  const lastnameHandler = (event) => {
    setEnteredLastname(event.target.value);
    console.log(event.target.value);
  };

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
  };

  const numberHandler = (event) => {
    setEnteredNumber(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const fullUser = {
      username: enteredUsername,
      lastname: enteredLastname,
      email: enteredEmail,
      number: enteredNumber,
      id: Math.random().toString(),
    };
    console.log(fullUser);
    props.onAddUser(fullUser);

    setEnteredUsername("");
    setEnteredLastname("");
    setEnteredEmail("");
    setEnteredNumber("");
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.headingWrap}>
        <h2>Dodaj novi zapis</h2>
        <div onClick={() => props.closeAdd()}>
          <i class="fas fa-times"></i>
        </div>
      </div>

      <form onSubmit={submitHandler}>
        <div className={styles.input}>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Ime"
            value={enteredUsername}
            onChange={usernameHandler}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="userlastname"></label>
          <input
            type="text"
            id="userlastname"
            required
            name="userlastname"
            placeholder="Prezime"
            value={enteredLastname}
            onChange={lastnameHandler}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={enteredEmail}
            onChange={emailHandler}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="phone"></label>
          <input
            required
            type="number"
            id="phone"
            name="phone"
            placeholder="Broj Telefona"
            value={enteredNumber}
            onChange={numberHandler}
          />
        </div>
        <button className={styles.btn}>Dodaj</button>
      </form>
    </div>
  );
};

export default InputUser;
