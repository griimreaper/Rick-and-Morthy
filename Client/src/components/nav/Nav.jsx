import React from 'react'
import SearchBar from "./SearchBar"
import "./Nav.css"
import { Link } from "react-router-dom"
import { resetCharacters } from '../../redux/actions'
import { useDispatch } from 'react-redux'

export default function Nav({ onSearch, logout }) {
  const dispatch = useDispatch()
  return (
    <div className="nav">
      <h1>Rick And Morthy</h1>
      <div className="contenido">
        <Link to="/history">
          <button className="boton">History</button>
        </Link>
        <Link to="/about">
          <button className="boton">About</button>
        </Link>
        <Link to="/home">
          <button className='boton' onClick={()=>dispatch(resetCharacters())}>Home</button>
        </Link>
        <SearchBar onSearch={onSearch}></SearchBar>
        <button onClick={logout} >LogOut</button>
      </div>
    </div>
  )
}
