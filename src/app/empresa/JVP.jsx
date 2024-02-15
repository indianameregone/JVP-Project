import { Button } from '@mui/material';
import './style.css'
export const Jvp = () => {
    return (
        <div className='general'>
            <h2 >JVP Consultores SA</h2>
            <hr></hr>
            <br />
            <p>Las actividades de la Empresa se encuentran orientadas a la Prestación de Servicios de Auditoría Técnica y Consultoría, vinculados a:
            </p>
            <br />
            <ul >
                <li>La gestión de obras de infraestructura.</li>
                <li>Al diseño y tecnología.</li>
                <li>Al desarrollo de sistemas regulatorios.</li>
                <li>Al medio ambiente y a la gestión de Empresas de Servicios Públicos e Industriales.</li>
            </ul>
            <br />
            <p>
                Entre otros, éstos servicios han sido prestados en Argentina y en el extranjero, satisfaciendo las necesidades de Agencias Gubernamentales, Organismos Internacionales de Asistencia Técnica y Financiera, Operadores de Servicios Públicos del Estado y Privados, Entes Reguladores, e Industrias.</p>
            <br />
            <a style={{ marginLeft: '90%' }}href="https://www.jvpsa.com/_files/ugd/8e00bb_dc9a3a225f9241e49393f7bfe0acffd6.pdf" target='_blank'><Button variant="contained">Brochure</Button></a>
        </div>
    )
}