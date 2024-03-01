import {useState} from "react";

const ItemCount = ({stock, initial, onAdd})=> {
     const [quantity, setQuantity] = useState(0)
     console.log(quantity);

    
     const increment = () => {
        if(quantity>1){
            setQuantity(quantity +1)
        }
    }
    
    const decrement = () => {
        if(quantity-1){
            setQuantity(quantity -1)
        }
    }
    
    
    
    return(
        <div className = "columns">
           <div className ="column">
            <button onClick={increment} className="button is-danger is-fullwidth">+</button>
            </div>
            <div>
            <p>Cantidad: {quantity}</p> 
            </div>
            <div className="column">
            <button onClick={decrement} className="button is-danger is-fullwidth">-</button>    
            </div>   
            <div className="column">
            <button onClick={() => onAdd(quantity)} disabled={!stock} className="button is-danger is-fullwidth"> 
            Agregar al carrito
            </button>    
            </div>             
        </div>
    )
}
export default ItemCount;