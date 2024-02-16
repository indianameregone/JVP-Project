import './style.css'

export const Diseño = () =>{
    return(
        <div style={{ width:"90%",height:"500px", marginTop:"20px",marginBottom:"20px"}}>
            <h1>Diseño</h1>
            <hr></hr>
            <p>Ayudamos a nuestros clientes a alcanzar sus objetivos teniendo en consideración de manera primordial el balance entre los aspectos ambientales, sociales y económicos-financieros de sus negocios</p><br></br>
            <p>Proveemos soluciones realistas que reflejan nuestro conocimiento y comprensión de que cada cliente es único, que posee diferentes modelos de negocios, por lo tanto, entendemos la necesidad de ofrecer soluciones personalizadas según el caso</p>
            <div className='main-block'>
                <div className='design-block'>
                    <div className='d-block' id="d-block-2">
                        <p>Estudios Básicos</p>
                    </div>
                    <div className='d-block' id="d-block-1">
                        <p>Proyectos Ejecutivos </p>
                    </div>
                    <div className='d-block' id="d-block-2">
                        <p>Evaluación Social y Ambiental</p>
                    </div>
                    <div className='d-block' id="d-block-1">
                        <p>Planes Maestros</p>
                    </div>
                    <div className='d-block' id="d-block-2">
                        <p>Ingeniería de Detalle</p>
                    </div>
                    <div className='d-block' id="d-block-1">
                        <p>Optimización de Procesos y Eficiencia Energética</p>
                    </div>
                    <div className='d-block' id="d-block-2">
                        <p>Estudios de Factibilidad</p>
                    </div>
                    <div className='d-block' id="d-block-1">
                        <p>Puesta en Marcha y Capacitación</p>
                    </div>
                    <div className='d-block' id="d-block-2">
                        <p>Sistemas Tarifarios y Regulación</p>
                    </div>
                </div>
                <div className='arrow'>

                </div>
                <div style={{gap:"15px",width:"200px",display:"flex",flexDirection:"column"}}>
                    <div className='btn-block'>
                        <p>Ingenieria y Desarrollo</p>
                    </div>
                    <div className='btn-adv'>
                        <p>
                        Nuestro Asesoramiento en Ingeniería y Desarrollo integra todos los aspectos vinculados a la evolución de los Proyectos 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}