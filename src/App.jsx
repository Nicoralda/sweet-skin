import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList/ImageList";
import { useState } from "react";

function App() {

    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const resultado = await searchImage(term);
        setImages(resultado);
    }

    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={'Tu piel, nuestro dulce secreto.'} />
            <SearchBar enSubmit={handleSubmit} />
            <ImageList images={images}/>
        </div>
    )

}

export default App;