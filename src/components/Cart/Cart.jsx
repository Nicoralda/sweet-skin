import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem"; 
import { Link } from "react-router-dom";

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
                <CartItem key={p.id || index} {...p} /> 
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Vaciar carrito</button>
            <Link to='/checkout' className='Option'>Continuar pedido</Link>
        </div>
    );
};

export default Cart;