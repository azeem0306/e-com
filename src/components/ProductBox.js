import { Link } from "react-router-dom";

export const ProductBox = (props) => {

    return (
        <div className="productBox">
            <div className="productImage">
                
                <Link to={`/all-products/${props.landing}`}><img src={props.image}/></Link>
            </div>
            <Link to={`/all-products/${props.landing}`}>
                <div className="productTextBox">
                    <p className="productTitle">{props.title}</p>
                    <p className="productPrice">LKR <span>{props.price}</span></p>
                </div>
            </Link>
        </div>
    );
}