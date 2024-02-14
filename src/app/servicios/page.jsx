'use client'
import { Nav } from "../Nav"
import { useState } from "react"
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Main } from "./main";
import { Diseño } from "./diseño";
import { Supervision } from "./supervision";
import { Construccion } from "./construccion";
import { Asesoramiento } from "./asesoramiento";
import { Auditoria } from "./auditoria";
import { Consultoria } from "./consultoria";

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

const Servicios=()=>{
    let [main,setMain] = useState(<Main/>)
    let [diseño,setDiseño] = useState('')
    let [supervision,setSupervision] = useState('')
    let [construccion,setConstruccion] = useState('')
    let [asesoramiento,setAsesoramiento] = useState('')
    let [auditoria,setAuditoria] = useState('')
    let [consultoria,setConsultoria] = useState('') 
    
    return(
        <>
        <Nav/>
        <div style={{display:"flex",width:"100%"}}>
            <section style={{display:"flex",flexDirection:"column", width:"200px",padding:"0 20px 0 20px",gap:"5px",marginTop:"10px"}}>
            <img style={{height: "100px"}}
      src="https://static.wixstatic.com/media/8e00bb_89c81504de6a4b7495adb97d57c0d84e~mv2.png/v1/crop/x_24,y_0,w_785,h_432/fill/w_200,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20GOTA%20.png"
      alt="Logo"
    />
            <ThemeProvider theme={theme}>
                <Button variant="contained" onClick={()=>{
                setMain(<Main/>)
                setDiseño('')
                setSupervision('')
                setConstruccion('')
                setAsesoramiento('')
                setAuditoria('')
                setConsultoria('')                       
                }}>Servicios</Button>
                <Button variant="contained" onClick={()=>{
                setMain('')
                setDiseño(<Diseño/>)
                setSupervision('')
                setConstruccion('')
                setAsesoramiento('')
                setAuditoria('')
                setConsultoria('')                         
                }}>Diseño de Ingenieria</Button>
                <Button variant="contained" onClick={()=>{
                setMain('')
                setDiseño('')
                setSupervision(<Supervision/>)
                setConstruccion('')
                setAsesoramiento('')
                setAuditoria('')
                setConsultoria('') 
                }}>Supervision de Obra</Button>
                <Button variant="contained" onClick={()=>{
                setMain('')
                setDiseño('')
                setSupervision('')
                setConstruccion(<Construccion/>)
                setAsesoramiento('')
                setAuditoria('')
                setConsultoria('')                        
                }}>Q.A. Construccion</Button>
                <Button variant="contained" onClick={()=>{
                setMain('')
                setDiseño('')
                setSupervision('')
                setConstruccion('')
                setAsesoramiento(<Asesoramiento/>)
                setAuditoria('')
                setConsultoria('')                       
                }}>Asesoramiento</Button>
                <Button variant="contained" onClick={()=>{
                setMain('')
                setDiseño('')
                setSupervision('')
                setConstruccion('')
                setAsesoramiento('')
                setAuditoria(<Auditoria/>)
                setConsultoria('')                      
                }}>Auditoria</Button>
                <Button variant="contained" onClick={()=>{
                setMain('')
                setDiseño('')
                setSupervision('')
                setConstruccion('')
                setAsesoramiento('')
                setAuditoria('')
                setConsultoria(<Consultoria/>)                        
                }}>Consultoria</Button>
            </ThemeProvider>
            </section>
            <div style={{display:"flex",flexDirection:"column"}}>
                {main}
                {diseño}
                {supervision}
                {construccion}
                {asesoramiento}
                {auditoria}
                {consultoria}
            </div>
        </div>
        </>
    )
}
export default Servicios