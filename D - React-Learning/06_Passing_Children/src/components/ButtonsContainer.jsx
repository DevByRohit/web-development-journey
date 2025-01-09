import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ symbolsArr }) => {
  return (
    <div className={styles.btnContainer}>
      {symbolsArr.map((element) => (
        <button key={element} className={styles.btnCss}>
          <span className={styles.symbolsStyle}>{element}</span>
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
