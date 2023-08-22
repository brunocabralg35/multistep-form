import { useContext, useEffect, useState } from "react";
import bgSideMobile from "../../assets/images/bg-sidebar-mobile.svg"
import "./style.css"
import FormContext from "../../context/FormContext";

export default function StepMenu(){

    // utilizar o contexto depois
    const {currentPage} = useContext(FormContext);   

    return (
        <div className="stepMenu">
            <div className="steps">
                <div className={currentPage === 0 ? 'filled step' : 'step'}>
                    <p>1</p>
                </div>
                <div className={currentPage === 1 ? 'filled step' : 'step'}>
                    <p>2</p>
                </div>
                <div className={currentPage === 2 ? 'filled step' : 'step'}>
                    <p>3</p>
                </div>
                <div className={currentPage === 3 ? 'filled step' : 'step'}>
                    <p>4</p>
                </div>
            </div>
            <img src={bgSideMobile} alt="" />
        </div>
    );
}