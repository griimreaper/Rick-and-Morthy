import React from 'react'
import "./about.css"
import Card from '../card/Card'

export default function About() {
    return (
        <div className="ab">
            <h1>Hola, Soy Leonel Behnke!</h1>
            <Card
            id="1000"
            name="Leonel Behnke"
            image="https://scontent.fepa14-1.fna.fbcdn.net/v/t1.6435-9/101702864_148789676745244_5297213200310206464_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=k7TDW2TsbncAX_pVQVi&_nc_ht=scontent.fepa14-1.fna&oh=00_AfDeS4bc38RSNi9je7tLOiI3csIoQ8BH0Zt71vtoHnOe5w&oe=6443323F"
            gender="Male"
            species="Human"
            origin="Argentina"
            status="Alive"
            ></Card>
            <h2>Esta es mi primera aplicacion web</h2>
            <h4>Foto mia con mi perra Kira</h4>
            <h4>Pertenezco al sector:</h4>
            <h4>FT-36:   Cohorte 08</h4>
            <h1> Henry </h1>
        </div>
    )
}
