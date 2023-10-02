import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import data from "../data/products.json";
import { ProductDesCard } from "./profileDescription/Cards";

export const ProductDescription = () => {
    const key = useParams();
    
    const [prodTitle, setProdTitle] = useState("");

    useEffect(() => {
        data.map((val,id) => {
            if (val.key === key.prodkey) {
                setProdTitle(val.title);
            }
        })
    });
    
    return (
        <div className="prdDescContainer">
            <div className="prdDescNav"><Link to="/all-products">All Products</Link> &rsaquo; {prodTitle}</div>
            {
                data.map((val, id) => {
                    if (val.key === key.prodkey) {
                        return <ProductDesCard key={val.id} props={val}/>;
                    } 
                } )
                
            }
        </div>
    )
}