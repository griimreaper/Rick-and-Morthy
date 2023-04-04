import React from 'react'
import SearchBar from "./SearchBar"
import "./Nav.css"
import { Link } from "react-router-dom"

export default function Nav({ onSearch, logout }) {
  return (
    <div className="nav">
      <h1>Rick And Morthy</h1>
      <div className="contenido">
        <Link to="/about">
          <button className="boton">About</button>
        </Link>
        <Link to="/home">
          <button className='boton'>Home</button>
        </Link>
        <SearchBar onSearch={onSearch}></SearchBar>
        <button onClick={logout} >LogOut</button>
      </div>
    </div>
  )
}
