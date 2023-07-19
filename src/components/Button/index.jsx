/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./style.css";

function Button(props) {
  const navigate = useNavigate();

  function handleClick() {
    if (props.type === "back") {
      navigate(-1);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={props.type === "back" ? "backBtn" : ""}
      type="submit"
    >
      {props.text}
    </button>
  );
}

export default Button;
