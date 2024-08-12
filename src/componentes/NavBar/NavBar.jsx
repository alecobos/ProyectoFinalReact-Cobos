import { Link } from "react-router-dom"
import CarritoWidget from "../CarritoWidget/CarritoWidget"
import Logo from "../Logo/Logo"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <div className = "izquierda" >
                <Logo />
                <ul className="lista">
                    <li className="lista"><Link to="/">Inicio</Link></li>
                    <li className="lista"><Link to="/productos">Todos</Link></li>
                    <li className="lista"><Link to="/productos/camiseta">Camisetas</Link></li>
                    <li className="lista"><Link to="/productos/pantalon">Pantalones</Link></li>
                    <li className="lista"><Link to="/productos/campera">Camperas</Link></li>
                    <li className="lista"><Link to="/productos/accesorios">Accesorios</Link></li>
                    {/* <li className="lista"><Link to="/contacto">Contacto</Link></li> */}
                    <CarritoWidget />
                    
                </ul>
                
            </div>
        </nav>
    )
}

export default NavBar
