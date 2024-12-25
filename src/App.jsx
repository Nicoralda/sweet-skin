import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={'Tu piel, nuestro dulce secreto.'}/>
        </div>
        
    )

}

export default App;