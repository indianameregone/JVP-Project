import "./style.css"
export const Supervision = () =>{
    return(
        <div style={{ width:"1000px",height:"400px", marginTop:"20px"}}>
            <h1>Supervision de Obra</h1>
            <hr />
            <p style={{width:"60%",marginBottom:"10px"}}>Somos expertos en las actividades que refieren al campo del Agua Potable y Saneamiento, Proyectos Viales, Obras Civiles e Hidráulicas.</p>
            <div style={{display:"flex",gap:"50px"}}>
                <ul className="ul-list">
                    <li>Garantía de calidad de las Obras</li>
                    <li>Asesoramiento en Ingeniería</li>
                    <li>Presencia de Profesionales especializados</li>
                    <li>Cumplimiento de Especificaciones de Materiales y Equipos</li>
                    <li>Control del Equipamiento especial</li>
                    <li>Conservación del medio ambiente</li>
                </ul>
            
                <ul className="ul-list">
                    <li>Medición del Avance de las obras</li>
                    <li>Certificación</li>
                    <li>Rápida resolución de Problemas constructivos</li>
                    <li>Control permanente de las cuestiones de Higiene y Seguridad</li>
                    <li>Control del Cumplimiento del Cronograma</li>
                </ul>
            </div>
            <div style={{width:"750px",display:"flex",gap:"50px",marginTop:"20px",justifyContent:"space-around"}}>
               <div className="bl-list">
                <p>Calidad de</p><p> Materiales</p><p> y Equipos</p>
               </div>
               <div className="bl-list">
                <p>Eficiencia </p><p> Constructiva</p>
               </div>
               <div className="bl-list">
                <p>Medición y</p><p> Certificación</p>
               </div>
               <div className="bl-list">
                <p>Administración</p><p> del Contrato</p>
               </div>
            </div>
            <div className="bottom-letter">
            <p>Verificación de las especificaciones conforme al pliego del comitente</p>
            </div>
        </div>
    )
}