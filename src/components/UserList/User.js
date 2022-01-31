import React from "react";
import styles from "./User.module.css";
import { useState } from "react";
import NewModal from "../NewModal/NewModal";

const User = (props) => {
  const [editing, setEditing] = useState(false);

  const startEditHandler = () => {
    setEditing(true);
  };

  const stopEditHandler = () => {
    setEditing(false);
  };
  return (
    <div>
      {editing ? (
        <NewModal
          setUpdateUsername={props.setUpdateUsername}
          setUpdateNumber={props.setUpdateNumber}
          setUpdateEmail={props.setUpdateEmail}
          enteredUsername={props.username}
          enteredLastname={props.lastname}
          enteredEmail={props.email}
          enteredNumber={props.number}
          setUpdateLastname={props.setUpdateLastname}
          id={props.id}
          stopEditing={stopEditHandler}
        />
      ) : null}

      <li className={styles.user_list} key={props.id}>
        <div className={styles.name}>{props.username}</div>
        <div className={styles.lastname}>{props.lastname}</div>
        <div className={styles.email}>{props.email}</div>
        <div className={styles.number}>{props.number}</div>
        <div className={styles.two_actions}>
          <button className={styles.first_btn} onClick={startEditHandler}>
            <i class="fas fa-pen"></i>
          </button>
          <button
            onClick={() => props.deleteHandlerProps(props.id)}
            className={styles.second_btn}
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default User;
