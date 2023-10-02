import { OrderCard } from "./Cards"
import data from "../../data/orderDetails.json"
import { useEffect } from "react";

data = data.reverse();

export const OrderDetails = () => {
    useEffect(() => {
        console.log('order mounted');
        return () => {
            console.log('order unmounted')
        }
    })
    return (
        <div className="orderDetContainer">
            <div className="orderDetHeader">
                <h1>Order Details</h1>
                <p>View the details of your orders.</p>
            </div>
            <div className="orderDetSection">
                {data.map((dat,id) => {
                    return <OrderCard key={dat.id} orderno={dat.orderno} date={dat.date} items={dat.items} amount={dat.amount} />
                })}
            </div>
        </div>
    )
}