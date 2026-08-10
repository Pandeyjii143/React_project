import { useState } from "react";
import ButtonContainner from "./components/ButtonContainner";
import Display from "./components/display";
import styles from "./App.module.css";
import AppName from "./components/AppName";

function App() {
  const [calVal, setVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <AppName />
        <Display displayVal={calVal} />
        <ButtonContainner onButtonClick={onButtonClick} />
      </div>
    </>
  );
}
export default App;
