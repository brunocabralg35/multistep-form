/* eslint-disable react/prop-types */
import "./style.css"

export default function Footer({children}){

    return(
        <div className="footer-btn" style={children.length > 1 ? {justifyContent: 'space-between'} : {justifyContent: "end"} }>
            {children}
        </div>
    );
}