import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import searchImage from "./api";
import ImageList from "./components/ImageList/ImageList";
import { CartProvider } from "./context/cartContext";

function App() {

    const [images, setImages] = useState([]);

useEffect(() => {
    const fetchImages = async () => {
        try {
            const resultado = await searchImage("skin");
            console.log('Fetched Images:', resultado); 
            setImages(resultado);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    fetchImages();
}, []);

    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                <NavBar />
                <div className="GalleryContainer">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <ImageList images={images} />
                                <ItemListContainer />
                            </>
                        } />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="*" element={<h1>404 page not found</h1>} />
                    </Routes>
                </div>
                </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;