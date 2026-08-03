import styles from "./display.module.css";
const Display = ({ displayVal }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayVal}
      dis
      readOnly
    />
  );
};
export default Display;
