import { useState } from "react";
import image from "../data/azeem.jpeg";
import { OrderDetails } from "./profileDescription/OrderDetails";
import { PersonalInfo } from "./profileDescription/PersonalInfo";
import { Wishlist } from "./profileDescription/Wishlist";



export const Profile = () => {
    const [menuItem, setMenuItem] = useState("one");
    return (
        <div className="profileContainer">

            <div className="profileHeader">
                <div className="profileWelcomeMessage">Welcome Azeem Rashard!</div>
                <div className="profileSignOutBtn"><button>Sign Out</button></div>
            </div>

            <div className="profileBody">

                <div className="profileMenuSection">
                    <div className="profilePhoto">
                        <img src={image} />
                        <div className="profileName">Azeem Rashard</div>
                        <div className="profileEmail">azeemrashard@gmail.com</div>
                    </div>
                    <div className="profileMenu">
                            <div onClick={() => {setMenuItem("one")}}>Personal Information</div>
                            <div onClick={() => {setMenuItem("two")}}>Order History</div>
                            <div onClick={() => {setMenuItem("three")}}>Wish List</div>
                            <div onClick={() => {setMenuItem("four")}}>Returns</div>
                    </div>
                </div>

                <div className="profileMenuDescription">
                    {menuItem === "one" && <PersonalInfo />}
                    {menuItem === "two" && <OrderDetails />}
                    {menuItem === "three" && <Wishlist />}
                    {menuItem === "four" && <div>4</div>}
                </div>
            </div>
        </div>
    )
}


// style={{backgroundColor: menuItem==="one" ? "#B46060" : "#FFF4E0", color:  menuItem==="one" ? "#4D4D4D" : "#FFF4E0" }}