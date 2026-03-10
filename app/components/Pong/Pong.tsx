import styles from "./pong.module.css";

const Pong = () => {
  return (
    <main className={styles.main}>
      <div className={styles.game}>
        <div id="paddle-right" className={styles.paddle} />
        <div id="paddle-left" className={styles.paddle} />
        <div id="ball" className={styles.ball} />
      </div>
    </main>
  );
};

export default Pong;
