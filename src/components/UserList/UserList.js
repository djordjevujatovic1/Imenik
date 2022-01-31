import React from "react";
import styles from "./UserList.module.css";
import User from "./User";

const UserList = (props) => {
  return (
    <div className={styles.list_holder}>
      <div className={styles.head_actions}>
        <div className={styles.name}>
          <h3>Ime</h3>
        </div>
        <div className={styles.lastname}>
          <h3>Prezime</h3>
        </div>
        <div className={styles.email}>
          <h3>Email</h3>
        </div>
        <div className={styles.number}>
          <h3>Broj telefona</h3>
        </div>
        <div className={styles.actions}>
          <h3>Akcija</h3>
        </div>
      </div>
      <ul className={styles.ulist}>
        {props.users.map((user) => (
          <User
            username={user.username}
            lastname={user.lastname}
            email={user.email}
            number={user.number}
            key={user.id}
            id={user.id}
            deleteHandlerProps={props.deleteHandlerProps}
            startEdit={props.startEdit}
            setUpdateUsername={props.setUpdate}
            setUpdateLastname={props.setUpdateLastname}
            setUpdateEmail={props.setUpdateEmail}
            setUpdateNumber={props.setUpdateNumber}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
