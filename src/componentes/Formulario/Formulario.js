import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, setNombre] = useState ("")
    const [puesto, setPuesto] = useState ("")
    const [foto, setFoto] = useState ("")
    const [equipo, setEquipo] = useState ("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log('Manejar el envio')

        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} setValor={setNombre} />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} setValor={setPuesto} />
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} setValor={setFoto} />
            <ListaOpciones valor={equipo} setValor={setEquipo} equipos={props.equipos} />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el eqipo.</h2>
            <Campo titulo="título" placeholder="Ingresar título" required valor={titulo} setValor={setTitulo} />
            <Campo titulo="Color" placeholder="Ingresar color hex" required valor={color} setValor={setColor} type = "color" />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario