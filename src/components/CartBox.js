import { Link } from "react-router-dom";
import { useState } from "react";

export const CartBox = (props) => {
    const {qty, setQty} = useState(props.qty);
    
    const total = props.price * qty;
    console.log(qty, total)


    return (
        <div className="cartBox">
            <div className="cartImage">
                
                <Link to={`/all-products/${props.landing}`}><img src={props.image}/></Link>
            </div>
            <Link to={`/all-products/${props.landing}`}>
                <div className="cartTextBox">
                    <p className="cartTitle">{props.title}</p>
                    <p className="cartPrice">LKR <span>{props.price}</span></p>
                </div>
            </Link>
            <div>
                <input type="number" className="cartQTY" defaultValue={props.qty} onChange={event => {setQty(event.target.value)}} />
                
            </div>
            <div>
                <p></p>
            </div>
        </div>
    );
}