import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "./Episode.css"
import Episode from './Episode'

export default function Episodes() {
    const [episodes, setEpisodes] = useState()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/1`).then(({ data }) => {
            if (data.episode) {
                setEpisodes(data.episode);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setEpisodes();
    }, []);

    const idEp = () => {
        if (episodes) {
            const idEp = episodes.map((ep) => {
                const id = ep.split("/").pop()
                return id
            }
            )
            return idEp
        }
    }

    return (
        <div className='episodes'>
            <h1>Episodes</h1>
            {episodes && idEp().map((n) => {
                return (<Episode
                    id={n}
                    key={n} />)
            })}
        </div>
    )
}
