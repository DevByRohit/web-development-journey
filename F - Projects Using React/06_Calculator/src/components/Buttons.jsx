import styles from "./Buttons.module.css";

function Buttons({ symbolsArr, onButtonClick }) {
  return (
    <>
      {symbolsArr.map((element) => (
        <button
          key={element}
          className={styles.btnCss}
          onClick={() => onButtonClick(element)}
        >
          <span className={styles.symbolsStyle}>{element}</span>
        </button>
      ))}
    </>
  );
}

export default Buttons;
