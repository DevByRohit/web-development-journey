import styles from "./CalculationTextArea.module.css";

function CalculationTextArea({ displayValue }) {
  return (
    <input className={styles.display} value={displayValue} readOnly></input>
  );
}

export default CalculationTextArea;
