import "./style.css";


const Button = (onclick, name) => {
  return (
    <button className="btn" type="button" onClick={onclick}>
      {name}
    </button>
  );
};
export default Button;
