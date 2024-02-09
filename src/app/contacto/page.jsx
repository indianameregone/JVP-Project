'use client'
import { Nav } from "../Nav"
import {Botones} from "./botones"
import { Mapa } from "./mapa."
import { Consultas } from "./consultas"
import { Oficinas } from "./oficinas"
import {RRHH} from "./rrhh"
import { Button } from '@mui/material';
import { useState } from "react"

const Contacto = ()=>{
    let [mapa,setMapa] = useState(<Mapa/>)
    let [consulta,setConsulta] = useState('')
    let [oficinas,setOficinas] = useState('')
    let [rrhh,setRrhh] = useState('')
    return(
        <>
        <Nav />
        <div style={{display:"flex",width:"100%"}}>
            <section style={{display:"flex",flexDirection:"column", width:"200px",padding:"0 20px 0 20px",gap:"5px",marginTop:"10px"}}>
            <Button variant="contained" onClick={()=>{
            setMapa(<Mapa/>)
            setConsulta('')
            setOficinas('')
            setRrhh('')            
            }}>Contacto</Button>
            <Button variant="contained" onClick={()=>{
            setMapa('')
            setConsulta(<Consultas />)
            setOficinas('')
            setRrhh('')            
            }}>Consultas</Button>
            <Button variant="contained"onClick={()=>{
            setMapa('')
            setConsulta('')
            setOficinas(<Oficinas/>)
            setRrhh('')            
            }}>Oficinas</Button>
            <Button variant="contained" onClick={()=>{
            setMapa('')
            setConsulta('')
            setOficinas('')
            setRrhh(<RRHH/>)            
            }}>RRHH</Button>
            </section>
            <div style={{display:"flex",flexDirection:"column"}}>
                {mapa}
                {consulta}
                {oficinas}
                {rrhh}
            </div>
        </div>
        </>
    )
}
export default Contacto