import React from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Detail.css"

export default function Detail() {
  const { id } = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);

  const { name, status, species, gender, origin, image } = character

  return (
    <div class="container">
      <h1 className="detailTitle">{name}</h1>
      <div class="content">
        <div class="left">
          <h2 className='description'>❤️  STATUS: {status} </h2>
          <h2 className='description'>🥒  SPECIES: {species} </h2>
          <h2 className='description'>👤  GENDER: {gender} </h2>
          {origin && <h2 className='description'  >🏳️ ORIGIN: {origin.name}</h2>}
        </div>
        <div class="right">
          <img className="imagen" src={image} alt={name} />
        </div>
      </div>
    </div>)
}
