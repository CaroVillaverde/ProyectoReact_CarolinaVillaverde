import ProfileCard from "./components/ProfileCard";

import Cama from "./img/camablanca.jpg";
import CollarCeleste from "./img/collarceleste.jpg";
import CollarVioleta from "./img/collarvioleta.jpg";

import "bulma/css/bulma.css";

function App(){
    
    return <div>
                <section className=" hero is-danger">
                    <div className="hero-body">
                        <h1 className="title">Memis Petshop</h1>
                    </div>    
                </section>

                <div className="container">
                    <section className="section">
                        <div className="columns">
                            <div className="column is-4">
                                <ProfileCard titulo="Cama para Gato" handle="" img={Cama}/>                                                                                    
                            </div>
                            <div className="column is-4">
                                <ProfileCard titulo="Collar para gato rojo y celeste" handle="" img={CollarCeleste}/>
                                                                                        
                            </div>
                            <div className="column is-4">
                                <ProfileCard titulo="Collar para gato violeta y rosa" handle="" img={CollarVioleta}/>                                                                                       
                            </div>
                        </div>
                    </section>

                </div> 
           </div>
    
}
export default App;