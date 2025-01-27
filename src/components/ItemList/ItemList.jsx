import Item from "../Item/Item";
import './itemList.css';

const ItemList = ({ products }) => {
    return (
        <div className="ListGroup">
            {products.map(prod => (
                <Item key={prod.id} id={prod.id} name={prod.name} price={prod.price} img={prod.img} />
            ))}
        </div>
    );
};

export default ItemList;