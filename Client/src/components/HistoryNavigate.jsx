import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HistoryNavigate() {
    const {location} = useSelector((state)=> state)
    return (
        <div className='HistoryNavigate'>
        {location.map((loc, i)=>(
            <Link to={loc}>
            <h2 key={i}>{loc}</h2>
            </Link>)
        )}
        </div>
    )
}
