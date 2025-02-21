import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./Cart.css";

const CartItem = ({ id, name, price, quantity, img }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    };

    return (
        <div className="cart-item">
            <figure>
                <img src={img} alt={name} className="cart-item-img" />
            </figure>
            <div className="cart-item-details">
                <p className="cart-item-name">{name}</p>
                <div className="cart-item-info">
                    <p>Precio: ${price}</p>
                    <p>Cantidad: {quantity}</p>
                    <p>Subtotal: ${price * quantity}</p>
                </div>
                <button onClick={handleRemove} className="cart-item-remove">Eliminar</button>
            </div>
            <div className="cart-item-price">
                <p>${price}</p>
            </div>
        </div>
    );
};

export default CartItem;
