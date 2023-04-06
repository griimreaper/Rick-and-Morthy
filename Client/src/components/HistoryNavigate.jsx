import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HistoryNavigate() {
    const {location} = useSelector((state)=> state)
    return (
        <div className='HistoryNavigate'>
        {location.map((loc)=>(
            <Link to={loc}>
            <h2>{loc}</h2>
            </Link>)
        )}
        </div>
    )
}
