import React from 'react'
import { useState } from 'react'
import { validate } from "../form/Validation"
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Register() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})

    const handleSubmit = async (e) => {
        const endpoint = 'https://rick-and-morthy-server-griimreaper.vercel.app/login'
        try {
            await axios.post(endpoint, userData)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name]: evento.target.value
        })
        setErrors(
            validate({
                ...userData,
                [evento.target.name]: evento.target.value
            })
        )
    }

    return (
        <div className="contenidoL">
            <h2>Register.</h2>
            <label>Email: </label>
            <input value={userData.email} name="email" onChange={handleChange}></input>
            <p>{errors.email}</p>
            <label>Password: </label>
            <input value={userData.password} name="password" onChange={handleChange}></input>
            <p>{errors.password}</p>
            <Link to="/">
                <button className="botonF" onClick={handleSubmit}>Register</button>
            </Link>
        </div>
    )
}


