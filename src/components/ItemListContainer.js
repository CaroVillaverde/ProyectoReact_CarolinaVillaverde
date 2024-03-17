import { useState,useEffect} from "react";
import { getProducts } from "../components/asyncMock";


const ItemListContainer = ({greeting}) => {
    const[products, getProducts] = useState([])
    
    useEffect(() => {
        getProducts()
        .them(response => {
            getProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    })
    return(
        <div>
            <h1>{greeting}</h1>
            <itemList products={products}/>       
        </div>
    )
}
export default ItemListContainer;