import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./Episode.css"
import { Link } from 'react-router-dom';


export default function Episode({id}) {
    const [episode, setEpisode] = useState()

    if(id)useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/episode/${id}`)
            .then(({ data }) => {
            if (data.id) {
                setEpisode(data);
            } else {
                window.alert('No hay episodio con ese ID');
            }
        }).catch((err)=> {return console.log(err)});
    }, []);

    return (
        <div className='globalcat'>
        {episode && 
        <Link to={`/episode/${id}`}>
        <div className='divcat'>
        <h2>{episode.episode}</h2>
        <h4>{episode.name}</h4>
        </div>
        </Link>
        }
        </div>
    )
}
