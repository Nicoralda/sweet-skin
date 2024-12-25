import CartWidget from "../CartWidget/CartWidget"
import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2>Sweet Skin.</h2>
            <div>
                <button>Limpiadores</button>
                <button>Serums</button>
                <button>Protectores Solares</button>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar