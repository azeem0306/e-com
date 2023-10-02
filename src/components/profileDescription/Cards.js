import { useEffect, useState } from "react"
import userData from "../../data/profileData.json";

export const PsnlInfoCard = (props) => {
    return (
        <div className="psnlInfoCard">
            <div className="psnlInfoCardTitle">{props.title}</div>
            <div className="psnlInfoCardDetails">{props.det}</div>
        </div>
    )
}

export const OrderCard = (propsOrder) => {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div className="orderCard"  onClick={() => setIsHidden(!isHidden)} style={{backgroundColor : isHidden ? "#FFBF9B" : "#B46060" }} >
            <div className="orderId" style={{color : isHidden ? "#241b16" : "#FFF4E0"}}>Order ID: {propsOrder.orderno}</div>
            <div className="orderDet" style={{display : isHidden ? "none" : "block" }}>
                <div>Date: {propsOrder.date}</div>
                <div>Purchesed Items: {propsOrder.items}</div>
                <div>Total Amount: {propsOrder.amount}</div>
            </div>
        </div>
    )
}

export const ProductDesCard = (propsDesc) => {
    const [wlToggle, setWlToggle] = useState(false);
    const [wlIndex, setWlIndex] = useState(null);



    var n = [];
    useEffect(() => {
        userData[0].wishlist.map((val,id) => {
            if (val === propsDesc.props.id) {
                setWlToggle(true);
                setWlIndex(id);
            }
        })
    })

    const wishlistToggle = () => {
        setWlToggle(!wlToggle);
        if (wlToggle === true) {
            userData[0].wishlist.splice(wlIndex,1);
            n = userData[0].wishlist;

            console.log(n);
        } else {
            userData[0].wishlist = [...userData[0].wishlist,propsDesc.props.id].sort(function(a, b){return a - b});
            n = userData[0].wishlist;

            console.log(n);
        }

        

    }
    return (
        <div className="prdDescCard">
            <div className="prdDescImg"><img src={propsDesc.props.image} /></div>
            <div className="prdDescDetails">
                <div className="prdDescTitle">
                    <h1>{propsDesc.props.title}</h1>
                    <button className="prdDescWishlist" onClick={() => {wishlistToggle()}} style={{color: wlToggle ? "red" : "#4D4D4D", borderColor: wlToggle ? "red" : "#4D4D4D"}}>&#9829;</button>
                </div>
                <div className="prodDescPrice">LKR {propsDesc.props.price}</div>
                <div className="prodDescDescription">{propsDesc.props.description}</div>
                <div className="prodDescCart">
                    Qty: <input type="number"/>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
 