import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Form.css"
import { validate } from "./Validation"

export default function Login({ login }) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
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

    const printE = (error) => {setTimeout(() => {
        return error
    }, 2000); }

    return (
        <div className="contenidoL">
            <h2>Welcome dude, Buuurrrrp!.</h2>
            <img src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Image.png" alt="rami" />
            <label>Email: </label>
            <input value={userData.email} name="email" onChange={handleChange}></input>
            <p>{errors.email}</p>
            <label>Password: </label>
            <input value={userData.password} name="password" onChange={handleChange}></input>
            <p>{errors.password}</p>
            {Object.keys(errors).length === 0 && userData.email !== "" &&
                <Link to="/home">
                    <button onClick={handleSubmit}>Ingresar</button>
                </Link>}
        </div>
    )
}
