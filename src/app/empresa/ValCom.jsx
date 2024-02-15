import vision from '../img/Vision.jpg'
import mision from '../img/Mision.jpg'
import Image from "next/image"
import { Button } from '@mui/material';
import './style.css'
export const ValCom = () => {
    return (
        <div className='general'>
            <h2 >Valores Compartidos</h2>
            <hr></hr>
            <div style={{ display: 'flex' }}>
                <Image src={vision} alt="Vision" />
                <Image src={mision} alt="Mision" />
            </div>
            <strong><p>Valores que enmarcan una política a favor:</p></strong>
            <br />
            <strong><p>Asegurar al cliente: </p></strong>
            <br />
            <ul>
                <li>Los niveles de objetividad y confiabilidad propios de las actividades de auditoría, consultoría y 
                    supervisión de obras.</li>
                <li>La Experiencia de la Empresa.</li>
                <li>La calificación del personal.</li>
                <li>Un tratamiento individualizado.</li>
            </ul>
            <br />
            <strong><p>Brindar:</p></strong>
            <br />
            <ul>
                <li>Eficiencia y efectividad en nuestra prestación de servicio.</li>
                <li>Capacidad de respuesta al cambio.</li>
            </ul>
            <br />
            <strong><p>Observar:</p></strong>
            <br />
            <ul><li>Los sólidos principios éticos que enmarcan nuestra trayectoria.</li></ul>
            <br />
            <strong><p>Reflejar en nuestro accionar:</p></strong>
            <ul>
                <li>El cumplimiento de nuestro compromiso con la mejora continua.</li>
                <li>La satisfacción del cliente.</li>
            </ul>
            <Button style={{width: '700'}}>Toda la actividad de la Empresa está guiada por esta política, y constituye la base para la 
                auditoría a la que está sometida anualmente bajo las norma ISO 9001.</Button>
        </div>
    )
}