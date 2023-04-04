import React from 'react'
import "./Favorites.css"
import { Link } from 'react-router-dom'

export default function CardFavorite({ name, image, gender, species, status, id, origin }) {
    return (
        <div className="cardF">
            <div>
                <Link to={`/detail/${id}`}>
                    <h2 id={id}>{name}</h2>
                    <h3>{status}</h3>
                    <h3>{species}</h3>
                    <h3>{gender}</h3>
                    <h3>{origin}</h3>
                    <img src={image} alt={name} />
                </Link>
            </div>
        </div>
    )
}
