import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem"; 
import { Link } from "react-router-dom";
import "../CartItem/Cart.css";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Carrito vacío</h1>
                <Link to='/' className='Option'>Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map((p, index) => (
                <div key={p.id || index}>
                    <CartItem {...p} />
                    <div className="cart-item-separator"></div>
                </div>
            ))}
            <div className="cart-total">Total: ${total}</div>
            <button onClick={() => clearCart()} className="button">Vaciar carrito</button>
            <Link to='/checkout' className='Option'>Continuar pedido</Link>
        </div>
    );
};

export default Cart;
