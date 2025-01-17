// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDivide } from "@fortawesome/free-solid-svg-icons";
import styles from "./ButtonContainer.module.css";
import Buttons from "./Buttons";
const ButtonContainer = ({ onButtonClick }) => {
  let calSymbols = [
    "AC",
    "%",
    "X",
    // <FontAwesomeIcon icon={faDivide} />,
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={styles.btnContainer}>
      <Buttons symbolsArr={calSymbols} onButtonClick={onButtonClick}></Buttons>
    </div>
  );
};

export default ButtonContainer;
