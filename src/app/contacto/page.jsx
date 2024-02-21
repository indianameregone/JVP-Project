'use client'
import { Nav } from "../Nav"
import {Botones} from "./botones"
import { Mapa } from "./mapa."
import { Consultas } from "./consultas"
import { Oficinas } from "./oficinas"
import {RRHH} from "./rrhh"
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react"
import { Footer } from "../footer"

const theme = createTheme({
    palette: {
        primary: {
            main: '#0E3354',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        }
    }
});

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
            <img style={{height: "100px"}}
      src="https://static.wixstatic.com/media/8e00bb_89c81504de6a4b7495adb97d57c0d84e~mv2.png/v1/crop/x_24,y_0,w_785,h_432/fill/w_200,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20GOTA%20.png"
      alt="Logo"
    />
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
            </section>
            <div style={{display:"flex",flexDirection:"column"}}>
                {mapa}
                {consulta}
                {oficinas}
                {rrhh}
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Contacto