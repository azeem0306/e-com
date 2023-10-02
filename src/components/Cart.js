import cartData from "../data/profileData.json";
import prodData from "../data/products.json";
import { CartBox } from '../components/CartBox';


export const Cart = () => {
    return (
        <div className="cartContainer">
            <div className="cartHeader">
            cart header
            </div>
            <div className="cartProducts">
                {
                    cartData[1].cart.item.map((val,id) => {
                        if (prodData[val]) {
                            return <CartBox key={prodData[val].id} image={prodData[val].image} title={prodData[val].title} price={prodData[val].price} landing={prodData[val].key} qty={cartData[1].cart.qty[id]}/>
                            // console.log(val,id)
                        }
                        
                    })
                    // console.log(
                    //     cartData[1].cart.qty
                    // )
                }
            </div>

        </div>
    )
}