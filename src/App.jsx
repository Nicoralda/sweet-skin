import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import searchImage from "./api";
import ImageList from "./components/ImageList/ImageList";
import ItemCount from "./components/ItemCount/ItemCount";
import { useState, useEffect } from "react";

function App() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const resultado = await searchImage("skin"); 
            setImages(resultado);
        };

        fetchImages();
    }, []); 

    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={'Tu piel, nuestro dulce secreto.'} />
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            <ImageList images={images}/>
        </div>
    )

}

export default App;