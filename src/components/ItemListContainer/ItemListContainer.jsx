import { useState, useEffect } from "react";
//import { getProductByCategory, getProducts } from "../../asyncProducts";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(false)

        const collectionRef = categoryId
            ? query(collection(db, "items"), where("category", "==", categoryId))
            : collection(db, "items");

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId]);

    return (
        <div>
            {loading ? (
                <h1>Cargando detalles ...</h1>

            ) : (
                <div>
                    <ItemList products={products} />
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;