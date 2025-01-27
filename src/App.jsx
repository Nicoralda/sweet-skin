import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import searchImage from "./api";
import ImageList from "./components/ImageList/ImageList";

function App() {

    const [images, setImages] = useState([]);

useEffect(() => {
    const fetchImages = async () => {
        try {
            const resultado = await searchImage("skin");
            console.log('Fetched Images:', resultado); // Verifica que las imágenes se obtuvieron
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
                <NavBar />
                <Routes>
                    <Route path="/" element= {<ItemListContainer />} />
                    <Route path="/category/:categoryId" element= {<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/galeria" element={<ImageList images={images} />} />
                    <Route path="*" element={<h1>404 page not found</h1>} />
                </Routes>
            </BrowserRouter>
            <div>
                <h2>Galería</h2>
                <ImageList images={images} />
            </div>
        </div>
    )

}

export default App;