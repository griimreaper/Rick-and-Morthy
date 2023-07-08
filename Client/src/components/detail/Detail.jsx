import React from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Detail.css"
import Episode from '../Episode/Episode'

export default function Detail() {
  const { id } = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`https://rick-and-morthy-server-griimreaper.vercel.app/character/${id}`);
        const { data } = response;
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return () => setCharacter({});
  }, [id]);

  const { name, status, species, gender, origin, image, episode } = character

  const idEp = () => {
    if (episode) {
      const idEp = episode.map((ep) => {
        const id = ep.split("/").pop()
        return id
      }
      )
      return idEp
    }
  }

  return (
    <div className="container">
      <h1 className="detailTitle">{name}</h1>
      <div className="content">
        <div className="left">
          <h2 className='description'>❤️  STATUS: {status} </h2>
          <h2 className='description'>🥒  SPECIES: {species} </h2>
          <h2 className='description'>👤  GENDER: {gender} </h2>
          {origin && <h2 className='description'  >🏳️ ORIGIN: {origin.name}</h2>}
        </div>
        <div className="right">
          <img className="imagen" src={image} alt={name} />
        </div>
      </div>
      <div>
      {episode &&
        <h1 className="tituloEp">Episodes with {name}</h1>}
        {episode && idEp().map((n) => {
          return (
            <Episode
              id={n}
              key={n} />
          )
        })}
      </div>
    </div>)
}
