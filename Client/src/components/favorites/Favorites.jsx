import CardFavorite from "./CardFavorite"
import "./Favorites.css"
import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react"
export default function Favorites({ userId }) {

    const [myFavorites, setMyFavorites] = useState([]);
    const [myFavoritesOrigin, setMyFavoritesOrigin] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/rickandmorty/fav/${userId}`)
            .then((response) => {
                setMyFavorites(response.data);
                setMyFavoritesOrigin(response.data)
            })
            .catch(error => console.error(error));
    }, []);

    function sortAlphabetically(a, b) {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()

        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0
    }

    const handleSortAlphabetically = (e) => {
        e.preventDefault()
        const { value } = e.target
        if (value === "Ascendente") {
            const sortedFavorites = myFavorites.slice().sort(sortAlphabetically)
            setMyFavorites(sortedFavorites)
        } else if (value === "Descendente") {
            const sortedFavorites = myFavorites.slice().sort(sortAlphabetically).reverse()
            setMyFavorites(sortedFavorites)
        }
    }

    const handleOrder = (e) => {
        e.preventDefault()
        const { value } = e.target
        if (value === "Ascendente") {
            const sortedFavorites = myFavorites.slice().sort((a, b) => a.id - b.id)
            setMyFavorites(sortedFavorites)
        } else if (value === "Descendente") {
            const sortedFavorites = myFavorites.slice().sort((a, b) => b.id - a.id)
            setMyFavorites(sortedFavorites)
        }
    }

    const handleFilter = (e) => {
        e.preventDefault();
        const { value } = e.target;
        const filteredFavorites = myFavoritesOrigin.filter((pj) => pj.gender === value);
        setMyFavorites(filteredFavorites);
    };

    const handleStatus = (e) => {
        e.preventDefault()
        const { value } = e.target
        const filteredFavorites = myFavoritesOrigin.filter((pj) => pj.status === value);
        setMyFavorites(filteredFavorites);
    }

    const handleReset = () => {
        setMyFavorites(myFavoritesOrigin)
    }

    return (
        <div className="containerF">
            <h1 className="tituloF">Tus Personajes Favoritos</h1>
            <div className="cardscont">
                <div className="filter">
                    <h2 id="filtrar">Filtrar</h2>
                    <button onClick={handleReset}>All Characters</button>
                    <div className="containerFi">
                        <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disable="true">
                                Id
                            </option>
                            <option value="Ascendente">Ascendente</option>
                            <option value="Descendente">Descendente</option>
                        </select>
                        <select onChange={handleFilter} name="filter" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disable="true">
                                Genero
                            </option>
                            <option value="Male">Hombre</option>
                            <option value="Female">Mujer</option>
                            <option value="Genderless">Sin Genero</option>
                            <option value="unknown">Desconocido</option>
                        </select>
                        <select onChange={handleSortAlphabetically} name="filterAlphabethycally" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disable="true">
                                Alfabeticamente
                            </option>
                            <option value="Ascendente">A - Z</option>
                            <option value="Descendente">Z - A</option>
                        </select>
                        <select onChange={handleStatus} name="status" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disable="true">
                                Estado
                            </option>
                            <option value="Alive">Vivo</option>
                            <option value="Dead">Muerto</option>
                        </select>
                    </div>
                </div>
                <div>
                    {myFavorites.map((pj) => {
                        const { name, image, gender, species, id, origin, status, onClose } = pj
                        return (
                            <CardFavorite
                                key={id}
                                id={id}
                                name={name}
                                gender={gender}
                                species={species}
                                origin={origin}
                                status={status}
                                onClose={onClose}
                                image={image} />)
                    })}
                </div>
            </div>
        </div>
    )
}

