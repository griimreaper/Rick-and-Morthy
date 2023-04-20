import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HistoryNavigate() {
    const {location} = useSelector((state)=> state)
    return (
        <div className='HistoryNavigate'>
        {location.map((loc, i)=>{
            let corregido = loc.split("/").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            return (
            <Link to={loc}>
            <h2 key={i}>{corregido}</h2>
            </Link>)
        })}
        </div>
    )
}
