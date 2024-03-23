import styles from "./HeaderComp.module.css";

export const HeaderComp = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <h1>Pet Shelter</h1>
        <a className={styles.linkStyle} onClick={props.onclick}>
          {props.linkName}
        </a>
      </div>
      <div className={styles.container2}>
        <h2>{props.subTitle}</h2>
        <div>{props.boton}</div>
      </div>
    </div>
  );
};
