/* eslint-disable react-hooks/exhaustive-deps */
import Box from "../../components/Box";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import "./style.css";
import { useContext, useEffect } from "react";
import FormContext from "../../context/FormContext";

export default function Summary() {
  const { setCurrentPage, register } = useContext(FormContext);

  useEffect(() => setCurrentPage(3), []);

  const navigate = useNavigate();

  useEffect(() => {
    if (!register.name) navigate("/");
    console.log(register);
  }, []);

  return (
    <div className="summary">
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

            <h3 className="price">$9/mo</h3>
          </div>

          <div className="addons">
            {register.addons.map((item, index) => {
              return (
                <div key={index} className="addItem">
                  <p>{item.service}</p>
                  <p>+$1/mo</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="total">
          <p>
            Total (per {register.planMethod == "yearly" ? "year" : "month"})
          </p>
          <h3>+$12/mo</h3>
        </div>
      </Box>
      <Footer>
        <Button text="Go back" type="back" />
        <Button text="Confirm" caminho="/summary" />
      </Footer>
    </div>
  );
}
