import './style.css'
export const Main = () =>{
    return(
        <div style={{ width:"90%",height:"400px", marginTop:"20px"}}>
            <h2>Servicios</h2>
            <p >En JVP Consultores acompañamos a nuestros clientes en todas las fases de los Proyectos y Operaciones. En cada Servicio que brindamos, además de considerar los impactos ambientales y asegurar la calidad e integridad física de todos los interesados, nos apoyamos en nuestro departamento de “Analítica” donde se desarrollan herramientas tecnológicas y digitales que permiten hacer un uso inteligente de los recursos</p>
            <button className="style-btn" style={{position: "absolute",top:"60%",left:"30%"}} >Diseño de Ingenieria</button> 
            <button className="style-btn" style={{position: "absolute",top:"45%",left:"35%"}} >Supervision de Obra</button> 
            <button className="style-btn" style={{position: "absolute",top:"35%",left:"45%"}} >Quality Assurance</button> 
            <button className="style-btn" style={{position: "absolute",top:"35%",left:"60%"}} >Asesoramiento</button> 
            <button className="style-btn" style={{position: "absolute",top:"45%",left:"70%"}} >Auditoria</button> 
            <button className="style-btn" style={{position: "absolute",top:"60%",left:"75%"}} >Consultoria</button> 
            <div style={{width:"350px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"absolute",left:"45%",top:"55%"}}>
                <p>Eficiencia Constructiva y Operativa</p>
                <p>Información confiable</p> 
                <p>Cumplimiento Regulatorio</p>
                <p>Procedimientos Participativos </p>
            </div> 
            <div style={{backgroundColor:"#0E3354",borderRadius:"5px",padding:"4px",width:"75%",color:"white", display:"flex",justifyContent:"center",marginLeft:"15%",marginTop:"25%"}}>
            <p>Experiencia</p>         
            </div>
        </div>
    )
}