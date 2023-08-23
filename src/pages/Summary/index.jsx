/* eslint-disable react-hooks/exhaustive-deps */
import Box from "../../components/Box";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import FormContext from "../../context/FormContext";
import iconThankYou from "../../assets/images/icon-thank-you.svg";

export default function Summary() {
  const { setCurrentPage, register, planValues } = useContext(FormContext);

  const [prices, setPrices] = useState({});
  const [confirm, setConfirm] = useState(false);

  useEffect(() => setCurrentPage(3), []);

  const navigate = useNavigate();

  useEffect(() => {
    if (!register.name) {
      navigate("/");
    } else {
      const addonsTotal = register.addons.reduce(
        (acc, addon) => acc + addon.price,
        0
      );
      setPrices({
        plan: planValues[register.planMethod][register.plan].price,
        addons: addonsTotal,
        total:
          planValues[register.planMethod][register.plan].price + addonsTotal,
      });
    }
  }, []);

  return (
    <div className="summary">
      {!confirm ? (
        <Box>
          <h2>Finishing up</h2>
          <p>Double-check everything looks OK before confirming.</p>

          <div className="choices">
            <div className="plan">
              <div className="plan-type">
                <h3>
                  {register.plan} ({register.planMethod})
                </h3>
                <Link className="link" to="/selectPlan">
                  Change
                </Link>
              </div>

              <h3 className="price">
                ${prices.plan}/{register.planMethod == "yearly" ? "yr" : "mo"}
              </h3>
            </div>

            <div className="addons">
              {!!register.addons &&
                register.addons.map((item, index) => {
                  return (
                    <div key={index} className="addItem">
                      <p>{item.service}</p>
                      <p>
                        +${item.price}/
                        {register.planMethod == "yearly" ? "yr" : "mo"}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="total">
            <p>
              Total (per {register.planMethod == "yearly" ? "year" : "month"})
            </p>
            <h3>
              +${prices.total}/{register.planMethod == "yearly" ? "yr" : "mo"}
            </h3>
          </div>
        </Box>
      ) : (
        <Box>
          <div className="content">
            <img src={iconThankYou} alt="Check" />
            <h1>Thank you!</h1>
            <p>
              Thanks For confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </Box>
      )}

      {!confirm && (
        <Footer>
          <Button text="Go back" type="back" />
          <Button
            text="Confirm"
            type="confirm"
            onClick={() => setConfirm(!confirm)}
          />
        </Footer>
      )}
    </div>
  );
}
