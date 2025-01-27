import { Link } from "react-router-dom";
import '../ItemList/itemList.css';

const Item = ({ id, name, price, img }) => {
    return (
        <div className="Card">
            <div className="ImageContainer">
                <img src={img} alt={name} />
            </div>
            <div className="CardContent">
                <h3 className="CardTitle">{name}</h3>
                <p className="CardPrice">${price}</p>
                <Link to={`/item/${id}`} className="CardButton">Ver Detalle</Link>
            </div>
        </div>
    );
};

export default Item;