import { Chip } from "@mui/material"
export const Main = () =>{
    return(
        <div style={{ width:"90%",height:"450px", marginTop:"20px"}}>
            <h2>Servicios</h2>
            <hr></hr>
            <p >En JVP Consultores acompañamos a nuestros clientes en todas las fases de los Proyectos y Operaciones. En cada Servicio que brindamos, además de considerar los impactos ambientales y asegurar la calidad e integridad física de todos los interesados, nos apoyamos en nuestro departamento de “Analítica” donde se desarrollan herramientas tecnológicas y digitales que permiten hacer un uso inteligente de los recursos</p>
            <Chip label="Diseño de Ingenieria" />
            <Chip label="Supervision de Obra" />
            <Chip label="Quality Assurance" />
            <Chip label="Asesoramiento" />
            <Chip label="Auditoria" />
            <Chip label="Consultoria" />
        </div>
    )
}