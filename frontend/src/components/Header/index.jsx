import "./styles.css";

const Header = (onClick, linkName, subTitle, boton) => {
  return (
    <header>
      <div className="cotainer">
        <h1>Pet Shelter</h1>
        <a className="linkStyle" onClick={onClick}>
          {linkName}
        </a>
      </div>

      <div className="container2">
        <h2>{subTitle}</h2>
        <div>{boton}</div>
      </div>
    </header>
  );
};

export default Header;