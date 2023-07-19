import Box from "../../components/Box";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import "./style.css"

export default function SelectPlan(){
    return (
        <div className="selectPlan">
            <Box>
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing.</p>

                <Footer>
                    <Button text="Go back" type="back"/>
                    <Button text="Next Step"/>
                </Footer>
            
            </Box>
        </div>
    );
}