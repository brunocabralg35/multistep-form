import { Check } from "@phosphor-icons/react";
import { useState } from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import "./style.css";

export default function AddOns() {
  const [onlineChecked, setOnlineChecked] = useState(false);
  const [largerChecked, setLargerChecked] = useState(false);
  const [customChecked, setCustomChecked] = useState(false);

  const plan = {
    method: "monthly",
  };

  return (
    <div className="addOns">
      <Box>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className="options">
          <label
            style={{
              border: onlineChecked && "1px solid rgb(58, 43, 226)",
              backgroundColor: onlineChecked && "rgba(234, 245, 255, 0.707)",
            }}
            htmlFor="online"
            className="input-wrapper"
          >
            <div className="contentDiv">
              <input
                onChange={() => setOnlineChecked(!onlineChecked)}
                type="checkbox"
                name="online"
                id="online"
                value="online"
              />
              <div className="checkbox">
                <Check weight="bold" size={24} color="#eae6e6" />
              </div>
              <div className="input-content">
                <h1>Online service</h1>
                <p>Access to multiplayer games</p>
              </div>
            </div>
            <div className="priceDiv">
              <p className="price">
                {plan.method === "monthly" ? "+$1/mo" : "+$10/yr"}
              </p>
            </div>
          </label>

          <label
            style={{
              border: largerChecked && "1px solid rgb(58, 43, 226)",
              backgroundColor: largerChecked && "rgba(234, 245, 255, 0.707)",
            }}
            htmlFor="storage"
            className="input-wrapper"
          >
            <div className="contentDiv">
              <input
                onChange={() => setLargerChecked(!largerChecked)}
                type="checkbox"
                name="storage"
                id="storage"
                value="storage"
              />
              <div className="checkbox">
                <Check weight="bold" size={24} color="#eae6e6" />
              </div>
              <div className="input-content">
                <h1>Larger storage</h1>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <div className="priceDiv">
              <p className="price">
                {plan.method === "monthly" ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          </label>

          <label
            style={{
              border: customChecked && "1px solid rgb(58, 43, 226)",
              backgroundColor: customChecked && "rgba(234, 245, 255, 0.707)",
            }}
            htmlFor="customProfile"
            className="input-wrapper"
          >
            <div className="contentDiv">
              <input
                onChange={() => setCustomChecked(!customChecked)}
                type="checkbox"
                name="customProfile"
                id="customProfile"
                value="customProfile"
              />
              <div className="checkbox">
                <Check weight="bold" size={24} color="#eae6e6" />
              </div>
              <div className="input-content">
                <h1>Customizable profile</h1>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <div className="priceDiv">
              <p className="price">
                {plan.method === "monthly" ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          </label>
        </div>

        <Footer>
          <Button text="Go back" type="back" />
          <Button text="Next Step" caminho="/summary" />
        </Footer>
      </Box>
    </div>
  );
}
