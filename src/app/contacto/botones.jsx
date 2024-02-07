import { Button } from '@mui/material';

export const Botones = () => {
    return(
    <>
    <section style={{display:"flex",flexDirection:"column", width: "250px",padding:"0 20px 0 20px",gap:"5px",marginTop:"10px"}}>
        <Button variant="contained" >Contacto</Button>
        <Button variant="contained">Consultas</Button>
        <Button variant="contained">Oficinas</Button>
        <Button variant="contained">RRHH</Button>
    </section>
    </>
    )
}
