import styles from "./ButtonComp.module.css";

export const ButtonComp = (props) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={props.onclick}
      style={{ backgroundColor: props.color }}
    >
      {props.name}
    </button>
  );
};
