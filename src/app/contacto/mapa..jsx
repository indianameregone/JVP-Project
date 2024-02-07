import mapa from "../img/mapa-jvp.jpg"
import Image from "next/image"
export const Mapa = () =>{
    return(
        <div style={{width:'60%',marginTop:"10px",height:"80%"}}>
            <h3>Contacto</h3>
            <hr></hr>
            <p>Av. Belgrano 1370,  Piso 6 -Ciudad Autónoma de Buenos Aires -Argentina - Tel:  +541143846042</p>
            <Image src={mapa} alt="mapa de las oficinas en Bs As"/>
        
        </div>
    )
}