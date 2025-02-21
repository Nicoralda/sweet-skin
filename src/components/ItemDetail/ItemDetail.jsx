import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css';

import { CartContext } from "../../context/cartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, name, price, img
        };

        addItem(item, quantity);
    };

    return (
        <article className="CardItem">
            <div className="ImageContainer">
                <img src={img} alt={name} className="ItemImg" />
            </div>
            <div className="Info">
                <header className="Header">
                    <h2 className="ItemHeader">{name}</h2>
                </header>
                <section>
                    <p className="ItemDescription">{description}</p>
                    <p className="ItemPrice">Precio: ${price}</p>
                    <p className="ItemStock">Stock disponible: {stock}</p>
                </section>
                <footer className="ItemFooter">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Button AddButton'>Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </article>
    );
};

export default ItemDetail;
