import { useContext, useEffect, useState } from "react";
import bgSideMobile from "../../assets/images/bg-sidebar-mobile.svg";
import "./style.css";
import FormContext from "../../context/FormContext";

export default function StepMenu() {
  // utilizar o contexto depois
  const { currentPage } = useContext(FormContext);

  return (
    <div className="stepMenu">
      <div className="steps">
        <div className="step-content">
          <div className={currentPage === 0 ? "filled step" : "step"}>
            <p>1</p>
          </div>
          <div className="step-text">
            <p>STEP 1</p>
            <h3>YOUR INFO</h3>
          </div>
        </div>
        <div className="step-content">
          <div className={currentPage === 1 ? "filled step" : "step"}>
            <p>2</p>
          </div>
          <div className="step-text">
            <p>STEP 2</p>
            <h3>SELECT PLAN</h3>
          </div>
        </div>
        <div className="step-content">
          <div className={currentPage === 2 ? "filled step" : "step"}>
            <p>3</p>
          </div>
          <div className="step-text">
            <p>STEP 3</p>
            <h3>ADD-ONS</h3>
          </div>
        </div>
        <div className="step-content">
          <div className={currentPage === 3 ? "filled step" : "step"}>
            <p>4</p>
          </div>
          <div className="step-text">
            <p>STEP 4</p>
            <h3>SUMMARY</h3>
          </div>
        </div>
      </div>
      <img src={bgSideMobile} alt="" />
    </div>
  );
}
