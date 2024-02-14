import { Chip } from "@mui/material"
export const Main = () =>{
    return(
        <div style={{ width:"90%",height:"400px", marginTop:"20px"}}>
            <h2>Servicios</h2>
            <hr></hr>
            <p >En JVP Consultores acompañamos a nuestros clientes en todas las fases de los Proyectos y Operaciones. En cada Servicio que brindamos, además de considerar los impactos ambientales y asegurar la calidad e integridad física de todos los interesados, nos apoyamos en nuestro departamento de “Analítica” donde se desarrollan herramientas tecnológicas y digitales que permiten hacer un uso inteligente de los recursos</p>
            <Chip style={{position: "absolute",top:"90%",left:"25%"}} label="Diseño de Ingenieria" />
            <Chip style={{position: "absolute",top:"70%",left:"35%"}} label="Supervision de Obra" />
            <Chip style={{position: "absolute",top:"50%",left:"45%"}} label="Quality Assurance" />
            <Chip style={{position: "absolute",top:"50%",left:"60%"}} label="Asesoramiento" />
            <Chip style={{position: "absolute",top:"70%",left:"70%"}} label="Auditoria" />
            <Chip style={{position: "absolute",top:"90%",left:"85%"}} label="Consultoria" />
            <div style={{width:"350px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"absolute",left:"45%",top:"80%"}}>
                <p>Eficiencia Constructiva y Operativa</p>
                <p>Información confiable</p> 
                <p>Cumplimiento Regulatorio</p>
                <p>Procedimientos Participativos </p>
            </div>
            
        </div>
    )
}