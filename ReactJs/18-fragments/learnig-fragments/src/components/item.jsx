import styles from "./item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["r-item"]} list-group-item ${bought && "active"} `}
    >
      <span className={styles["r-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
