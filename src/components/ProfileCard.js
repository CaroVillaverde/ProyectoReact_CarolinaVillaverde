import {useState} from "react";

function ProfileCard ({titulo,descripcion,img}){


    function handleClickSuma(){
        setCantidad( cantidad + 1 )
    }
    function handleClickResta(){
        setCantidad( cantidad - 1 )
    }


    const [cantidad, setCantidad] = useState(0);
    console.log(cantidad);


    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={img} alt="imagen" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <h3 className="title">{titulo}</h3>
                    <p className="subtitle">{descripcion}</p>
                    
                    <p> Descripción </p>
                    <div className = "columns">
                        <div className ="column">
                        <button onClick={handleClickSuma} className="button is-danger is-fullwidth">+</button>
                        </div>
                        <div>
                        <p>Cantidad: {cantidad}</p> 
                        </div>
                        <div className="column">
                        <button onClick={handleClickResta} className="button is-danger is-fullwidth">-</button>    
                        </div>
                    </div>
                </div>                
            </div>    
        </div>
        
    )
}
export default ProfileCard;