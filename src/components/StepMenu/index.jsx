import { useEffect, useState } from "react";
import bgSideMobile from "../../assets/images/bg-sidebar-mobile.svg"
import "./style.css"

export default function StepMenu(){

    // utilizar o contexto depois
    const currentPage = window.location.pathname;   

    return (
        <div className="stepMenu">
            <div className="steps">
                <div className={currentPage === '/' ? 'filled step' : 'step'}>
                    <p>1</p>
                </div>
                <div className={currentPage === '/selectPlan' ? 'filled step' : 'step'}>
                    <p>2</p>
                </div>
                <div className={currentPage === '/addOns' ? 'filled step' : 'step'}>
                    <p>3</p>
                </div>
                <div className={currentPage === '/summary' ? 'filled step' : 'step'}>
                    <p>4</p>
                </div>
            </div>
            <img src={bgSideMobile} alt="" />
        </div>
    );
}