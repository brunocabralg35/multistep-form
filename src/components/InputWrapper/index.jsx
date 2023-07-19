/* eslint-disable react/prop-types */
import "./style.css";

export default function InputWrapper({ children, label, labelFor }) {
  return (
    <div className="input">
      <label htmlFor={labelFor}>{label}</label>
      {children}
    </div>
  );
}
