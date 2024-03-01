import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ProfileCard from "./components/ProfileCard";
import ItemCount from "./components/ItemCount";

import Cama from "./img/camablanca.jpg";
import CollarCeleste from "./img/collarceleste.jpg";
import CollarVioleta from "./img/collarvioleta.jpg";

import "bulma/css/bulma.css";

function App(){
    
    return <div>
                
                <div>
                <NavBar />    
                <ItemListContainer  greeting={"¡Bienvenidos!"} />
                </div>
                <div className="container">
                    <section className="section">
                        <div className="columns">
                            <div className="column is-4">
                                <ProfileCard titulo="Cama para Gato" handle="" img={Cama}/> 
                                <ItemCount/>                                                                                  
                            </div>
                            <div className="column is-4">
                                <ProfileCard titulo="Collar para gato rojo y celeste" handle="" img={CollarCeleste}/>
                                <ItemCount/>                                                        
                            </div>
                            <div className="column is-4">
                                <ProfileCard titulo="Collar para gato violeta y rosa" handle="" img={CollarVioleta}/> 
                                <ItemCount/>                                                                                       
                            </div>
                        </div>
                    </section>

                </div> 
           </div>
    
}
export default App;