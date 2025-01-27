import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './navbar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h2>Sweet Skin.</h2>
            </Link>
            <div className="Categories">
            <NavLink to={`/category/La Roche-Posay`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>La Roche-Posay</NavLink>
            <NavLink to={`/category/CeraVe`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>CeraVe</NavLink>
            <NavLink to={`/category/Clinique`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Clinique</NavLink>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar