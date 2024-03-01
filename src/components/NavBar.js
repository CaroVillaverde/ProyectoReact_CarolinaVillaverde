import CartWidget from "./CartWidget";
const NavBar = () => {
    return (
        <nav className=" hero is-danger">
            <h1 className="title"> Memis Petshop</h1>
            <div>
             <button>Alimentos</button>
             <button>Accesorios</button>
             <button>Higiene</button> 
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar;