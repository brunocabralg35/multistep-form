/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import FormContext from "../../context/FormContext";

function Button(props) {
  const navigate = useNavigate();

  const { setRegister } = useContext(FormContext);

  function handleClick() {
    if (props.type === "plan") {
      setRegister((prevState) => ({
        ...prevState,
        plan: props.plan,
        planMethod: props.planMethod,
      }));
      navigate(props.caminho);
    }

    if (props.type === "addons") {
      setRegister((prevState) => ({
        ...prevState,
        addons: props.addons.filter((item) => !!item.checked),
      }));
      navigate(props.caminho);
    }

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
