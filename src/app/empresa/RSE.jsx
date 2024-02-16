import './style.css'
import LHH from '../img/La huella hidrica.jpg'
import LEC from '../img/La economia circular.jpg'
import Image from "next/image"
export const Rse = () => {
    return (
        <div className="general">
            <h2 >Responsabilidad Social Empresaria</h2>
            <hr></hr>
            <br />
            <p>En JVP Consultores entendemos que el agua dulce fue, es y será siempre un factor determinante en el
                desarrollo económico y social de la humanidad, posee un rol básico y fundamental para asegurar y
                mantener la integridad del entorno natural.</p>
            <br />

            <p>Al ser el agua un recurso natural vital, resulta entonces imperativo que los temas hídricos no sean abordados de
                forma aislada. Debemos pensar y planificar los usos del agua para que esos usos sean eficaces, eficientes y
                sostenibles en el tiempo. Estas premisas nos ha llevado como firma a ser especialistas en el manejo y gestión del
                Ciclo Integral del Agua.
            </p>
            <br />
            <p>En JVP Consultores hemos incorporado dos conceptos fundamentales en nuestra actividad como desarrolladores de proyectos
                de agua y saneamiento:</p>
            <Image src={LHH}/>
            <Image src={LEC}/>
        <p>Como se pronostica que la demanda mundial de agua excederá a los recursos viables disponibles, nuestros 
            enfoques de diseño y operación, tanto para el agua potable como para el saneamiento y manejo de aguas 
            pluviales, han dejado de ser los tradicionales, ya que en JVP Consultores hemos incorporado en nuestros 
            Estudios y Proyectos, nuevas estrategias y tecnologías que posibilitan que este recurso vital sea usado y 
            reutilizado, con criterios de uso y reúso eficientes para manejo y gestión del Ciclo Integral del Agua.</p>
        </div>
    )
}