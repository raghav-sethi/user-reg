import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./Modal.module.css";
export default function Modal(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirmError} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirmError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
