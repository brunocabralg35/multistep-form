import "./style.css"

function ErrorInput(props) {
  return <span className="spanError" style={{ color: "red" }}>{props.field} field is required</span>;
}

export default ErrorInput;
