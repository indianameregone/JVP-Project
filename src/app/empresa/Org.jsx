import './style.css'
import Image from "next/image"
import organigrama from '../img/Organigrama.jpg'
export const Org = () => {
    return (
        <div className="general">
            <h2 >Organización</h2>
            <hr></hr>
            <br />
            <p>Una preocupación permanente de la Dirección es mantener una organización funcional y sumamente flexible
                , que asegure una rápida capacidad de respuesta a los distintos requerimientos que se presentan en la
                actividad consultora, sin que ello interfiera en la consecución de los objetivos de calidad mantenidos
                por la Empresa para sus servicios profesionales. Tal flexibilidad ha sido posibilitada por: </p>
            <br />
            <ul><li>La calificación y experiencia de los profesionales que integran los distintos equipos de alto desempeño.</li>
                <li>El incremento de capacidad técnica que significan los acuerdos de colaboración estratégicos con firmas consultoras
                    de especialidades complementarias.</li>
                <li>Un amplio cuerpo de consultores independientes integrado por especialistas con extensa experiencia profesional.</li>
            </ul>
            <br />
            <p> La integración y la complementariedad nos asegura un tratamiento especializado y el análisis 
                interdisciplinario en pos de la búsqueda de soluciones reales y perdurables para cada uno de los 
                proyectos encarados.</p>
            <Image src={organigrama}/>
        </div>
    )
}