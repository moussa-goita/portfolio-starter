import { useState } from "react";

function App(){
  const [fruits, setFruits] = useState([
    {id:1, nom: "Abricot"},
    {id:2, nom: "Banane"},
    {id:3, nom: "Cerise"}
  ]);
//comportement
const handleDelete = (id) => {
};


//affichage
return (
  <div>
    <h1>Liste des fruits</h1>
    <ul>
      {fruits.map((fruit) => 
        <> <li key={fruit.id} >{fruit.nom}</li><button onClick={handleDelete}>X</button></>
        )}
        </ul>
  </div>
)
  }

export default App; 
