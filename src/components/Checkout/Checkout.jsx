import { CartContext } from "../../context/cartContext";
import { db } from "../../config/firebase";
import { useContext, useState } from "react";
import { Timestamp, collection, addDoc, doc, writeBatch, getDocs, query, where, documentId } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db); 
            const outOfStock = [];

            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, "items");

            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), "in", ids))
            );

            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit(); 

                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id); 
                clearCart();
            } else {
                console.error("Ups, hay productos fuera de stock:", outOfStock);
                alert("Algunos productos están fuera de stock. Por favor, revisa tu carrito.");
            }
        } catch (error) {
            console.error("Error al generar la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Generando pedido...</h1>;
    }
    if (orderId) {
        return (
            <div>
                <h1>¡Tu orden fue creada!</h1>
                <h3>¿Lista para una piel hermosa?</h3>
                <article>
                    <div>
                        <p>ID de su orden:</p>
                    </div>
                    <div>
                        {orderId}
                    </div>
                </article>
            </div>
        )
    }
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;
