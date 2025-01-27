import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
                </footer>
            </div>
        </article>
    );
};

export default ItemDetail;
