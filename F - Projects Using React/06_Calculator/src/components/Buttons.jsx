import styles from "./Buttons.module.css";

function Buttons({ symbolsArr }) {
  return (
    <>
      {symbolsArr.map((element) => (
        <button key={element} className={styles.btnCss}>
          <span className={styles.symbolsStyle}>{element}</span>
        </button>
      ))}
    </>
  );
}

export default Buttons;
