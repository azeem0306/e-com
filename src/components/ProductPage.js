import { ProductBox } from '../components/ProductBox';
import data from "../data/products.json"
import Axios from 'axios';
import { useQuery } from "@tanstack/react-query"


export const ProductPage = () => {

    return (
        <div className="productContainer">
            {data.map((dat,id) => {
                return <ProductBox key={dat.id} landing={dat.key} image={dat.image} title={dat.title} price={dat.price} />
                
            })}
        </div>
    );

}

