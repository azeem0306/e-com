import { ProductBox } from '../components/ProductBox';
import data from "../data/products.json";
import React, { useContext } from "react";
import { AppContext } from "../App";

export const Search = () => {
    const {searchItem} = useContext(AppContext)


    return (

        <div className="productContainer">

            {data.filter((val) => {
                if(searchItem === "") {
                    return val
                } else if (val.title.toLowerCase().includes(searchItem.toLowerCase())) {
                    return val
                }
            }).map((val,id) => {
                return <ProductBox key={val.id} image={val.image} title={val.title} price={val.price} />
            })}
        </div>

    )
}
