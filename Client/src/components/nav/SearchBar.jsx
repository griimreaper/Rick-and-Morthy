import { useState } from "react";
import "./Nav.css"
import { useDispatch } from "react-redux";
import { handleNumber } from "../../redux/actions";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")
   const dispatch = useDispatch()

   function handleChange(event) {
      setId(event.target.value)
   }
   function submit() {
      onSearch(id)
      dispatch(handleNumber(1))
   }

   return (
      <div className="in">
         <input className="inputnav" onChange={handleChange} type='search' name="search" value={id} placeholder="Agregar personajes" id="input" />
         <button className="botonnav" onClick={submit}>Search</button>
      </div>
   );
}
