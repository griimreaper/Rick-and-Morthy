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
      <img src='https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png' alt="rick and morthy logo"></img>
      <div className="contenido">
        <Link to="/history">
          <button className="boton">History</button>
        </Link>
        <Link to="/about">
          <button className="boton">About</button>
        </Link>
        <Link to="/episodes">
          <button className="boton">Episodes</button>
        </Link>
        <Link to="/home">
          <button className='boton' onClick={()=>dispatch(resetCharacters())}>Home</button>
        </Link>
        <SearchBar onSearch={onSearch}></SearchBar>
        <button onClick={logout} className='logout'>LogOut</button>
      </div>
    </div>
  )
}
