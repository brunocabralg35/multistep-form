import bgSideMobile from "../../assets/images/bg-sidebar-mobile.svg"
import "./style.css"

export default function StepMenu(){
    return (
        <div className="stepMenu">
            <div className="steps">
                <div className="step filled">
                    <p>1</p>
                </div>
                <div className="step">
                    <p>2</p>
                </div>
                <div className="step">
                    <p>3</p>
                </div>
                <div className="step">
                    <p>4</p>
                </div>
            </div>
            <img src={bgSideMobile} alt="" />
        </div>
    );
}