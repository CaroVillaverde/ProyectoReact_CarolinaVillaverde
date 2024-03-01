import {useState} from "react";

function ProfileCard ({titulo,descripcion,img}){

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
                </div> 
            </div>    
        </div>
        
    )
}
export default ProfileCard;