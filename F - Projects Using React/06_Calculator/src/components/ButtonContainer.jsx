import styles from "./ButtonContainer.module.css";
import Buttons from "./Buttons";
const ButtonContainer = ({ symbolsArr }) => {
  return (
    <div className={styles.btnContainer}>
      <Buttons symbolsArr={symbolsArr}></Buttons>
    </div>
  );
};

export default ButtonContainer;
