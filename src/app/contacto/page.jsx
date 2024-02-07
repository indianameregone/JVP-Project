import { Nav } from "../Nav"
import {Botones} from "./botones"
import { Mapa } from "./mapa."
import { Consultas } from "./consultas"
import { Oficinas } from "./oficinas"
import {RRHH} from "./rrhh"

const Contacto = ()=>{
    return(
        <>
        <Nav />
        <div style={{display:"flex"}}>
            <Botones/>
            <div style={{display:"flex",flexDirection:"column",overflowY:"scroll"}}>
                <Mapa/>
                <Consultas />
                <Oficinas />
                <RRHH/>
            </div>
        </div>
        </>
    )
}
export default Contacto