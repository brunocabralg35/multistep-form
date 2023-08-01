import Box from "../../components/Box";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import "./style.css";
import Arcade from "../../assets/images/icon-arcade.svg";
import Pro from "../../assets/images/icon-pro.svg";
import Advanced from "../../assets/images/icon-advanced.svg";
import { useState } from "react";

export default function SelectPlan() {
  const [planMethod, setPlanMethod] = useState("monthly");

  const planValues = {
    monthly: {
      arcade: { name: "Arcade", price: "$9/mo" },
      advanced: { name: "Advanced", price: "$12/mo" },
      pro: { name: "Pro", price: "$15/mo" },
    },
    yearly: {
      arcade: { name: "Arcade", price: "$90/yr" },
      advanced: { name: "Advanced", price: "$120/yr" },
      pro: { name: "Pro", price: "$150/yr" },
    },
  };

  return (
    <div className="selectPlan">
      <Box>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>

        <div className="options">
          <div className="input-option">
            <input
              type="radio"
              id="arcade"
              name="plan-option"
              value="arcade"
              defaultChecked={true}
            />
            <label htmlFor="arcade">
              <img src={Arcade} alt="" />
              <div className="content">
                <h1>Arcade</h1>
                <p>
                  {planMethod === "monthly"
                    ? planValues.monthly.arcade.price
                    : planValues.yearly.arcade.price}
                </p>
                <span>{planMethod === "yearly" && "2 months free"}</span>
              </div>
            </label>
          </div>
          <div className="input-option">
            <input
              type="radio"
              id="advanced"
              name="plan-option"
              value="advanced"
            />
            <label htmlFor="advanced">
              <img src={Advanced} alt="" />
              <div className="content">
                <h1>Advanced</h1>
                <p>
                  {planMethod === "monthly"
                    ? planValues.monthly.advanced.price
                    : planValues.yearly.advanced.price}
                </p>
                <span>{planMethod === "yearly" && "2 months free"}</span>
              </div>
            </label>
          </div>
          <div className="input-option">
            <input type="radio" id="pro" name="plan-option" value="pro" />
            <label htmlFor="pro">
              <img src={Pro} alt="" />
              <div className="content">
                <h1>Pro</h1>
                <p>
                  {planMethod === "monthly"
                    ? planValues.monthly.pro.price
                    : planValues.yearly.pro.price}
                </p>
                <span>{planMethod === "yearly" && "2 months free"}</span>
              </div>
            </label>
          </div>
        </div>

        <div className="plan-method">
          <button
            style={{ color: planMethod === "monthly" && "hsl(213, 96%, 18%)" }}
            onClick={() => {
              setPlanMethod("monthly");
            }}
          >
            Monthly
          </button>
          <div className="selector">
            <div
              style={{
                transform:
                  planMethod === "monthly"
                    ? "translateX(0%)"
                    : "translateX(150%)",
              }}
              className="ball"
            ></div>
          </div>
          <button
            style={{ color: planMethod === "yearly" && "hsl(213, 96%, 18%)" }}
            onClick={() => {
              setPlanMethod("yearly");
            }}
          >
            Yearly
          </button>
        </div>

        <Footer>
          <Button text="Go back" type="back" />
          <Button text="Next Step" />
        </Footer>
      </Box>
    </div>
  );
}
