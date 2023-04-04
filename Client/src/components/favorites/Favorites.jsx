import { useDispatch, useSelector } from "react-redux"
import CardFavorite from "./CardFavorite"
import "./Favorites.css"
import React from 'react'
import { filtrarNombre, orderCards, filterCards, reset, orderStatus } from "../../redux/actions"

export default function Favorites() {
    const { myFavorites } = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleSortAlphabetically = (e) => {
        e.preventDefault()
        const { value } = e.target
        return dispatch(filtrarNombre(value))
    }

    const handleOrder = (e) => {
        e.preventDefault()
        const { value } = e.target
        dispatch(orderCards(value))
    }

    const handleFilter = (e) => {
        e.preventDefault()
        const { value } = e.target
        dispatch(filterCards(value))
    }

    const handleStatus = (e) => {
        e.preventDefault()
        const { value } = e.target
        dispatch(orderStatus(value))
    }

    const handleReset = () => {
        return dispatch(reset())
    }

    return (
        <div className="containerF">
            <h1 className="tituloF">Tus Personajes Favoritos</h1>
            <div className="cardscont">
                <div className="filter">
                    <h2 id="filtrar">Filtrar</h2>
                    <button onClick={handleReset}>All Characters</button>
                    <div className="containerF">
                        <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disable>
                                Id
                            </option>
                            <option value="Ascendente">Ascendente</option>
                            <option value="Descendente">Descendente</option>
                        </select>
                        <select onChange={handleFilter} name="filter" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disable>
                                Genero
                            </option>
                            <option value="Male">Hombre</option>
                            <option value="Female">Mujer</option>
                            <option value="Genderless">Sin Genero</option>
                            <option value="unknown">Desconocido</option>
                        </select>
                        <select onChange={handleSortAlphabetically} name="filterAlphabethycally" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disable>
                                Alfabeticamente
                            </option>
                            <option value="Descendente">A - Z</option>
                            <option value="Ascendente">Z - A</option>
                        </select>
                        <select onChange={handleStatus} name="status" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disable>
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

