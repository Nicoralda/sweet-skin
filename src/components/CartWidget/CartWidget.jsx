import { BsBasket3Fill } from "react-icons/bs";
import '../NavBar/navbar.css';
import { useContext } from "react";
import { CartContext } from '../../context/cartContext';
import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className="CartWidget">
            <BsBasket3Fill />
            {totalQuantity}
        </Link>
    );
}

export default CartWidget;