import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/Card';

export default function DetailEpisode() {
    const [episode, setEpisode] = useState()
    const [characters, setCharacters] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios(`https://rick-and-morthy-server-griimreaper.vercel.app/episode/${id}`)
            .then(({ data }) => {
                if (data.id) {
                    setEpisode(data);
                } else {
                    window.alert('No hay episodio con ese ID');
                }
            }).catch((err) => { return console.log(err) });
    }, [id]);

    useEffect(() => {
        if (episode && episode.characters) {
            getCharactersData(episode.characters)
                .then(characterData => setCharacters(characterData))
                .catch(error => console.error(error));
        }
    }, [episode]);

    const getCharacterData = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const getCharactersData = async (urls) => {
        try {
            const characterDataPromises = urls.map(url => getCharacterData(url));
            const characterData = await Promise.all(characterDataPromises);
            return characterData;
        } catch (error) {
            console.error(error);
        }
    }

    const onClose = () => {
        setCharacters([]);
    }

    return (
        <div className='epBody'>
            {episode &&
                <div>
                    <h1 className='title'>{episode.name}</h1>
                    <div>
                        <h2 className='content'>Episode: {episode.episode}</h2>
                        <h2 className='content'>Air date: {episode.air_date}.</h2>
                    </div>
                    <div>
                        <h1>Characters</h1>
                        <div>
                            {characters.map((ch) => {
                                const { id, name, status, species, gender, origin, image } = ch
                                return (<Card key={id}
                                    id={id}
                                    name={name}
                                    status={status}
                                    species={species}
                                    gender={gender}
                                    origin={origin.name}
                                    image={image}
                                >
                                </Card>);
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}