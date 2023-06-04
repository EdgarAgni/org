
import "./MiOrg.css"

const MiOrg = (props) => {
    console.log(props)
    
    //const [nombre de variable, funcion que actualiza] = useState(valor inicial)
    // const[mostrar,actualizaMostrar] = useState(true);
    // const expandirClick = () => {
    //     console.log("Mostrar/Ocultar Elemento", !mostrar)
    //     actualizaMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="orgtitle">Mi organización</h3>
        <img src="/img/Boton_expandir.png" alt="Botón de Expandir" onClick={props.cambiarMostrar} ></img>
    </section>
}

export default MiOrg