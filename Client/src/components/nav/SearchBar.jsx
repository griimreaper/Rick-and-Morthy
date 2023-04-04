import { useState } from "react";
import "./Nav.css"

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")

   function handleChange(event) {
      setId(event.target.value)
   }

   return (
      <div className="in">
         <input className="inputnav" onChange={handleChange} type='search' name="search" value={id} placeholder="Agregar personajes" id="input" />
         <button className="botonnav" onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
