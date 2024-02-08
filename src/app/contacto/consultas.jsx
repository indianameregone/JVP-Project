import { TextField } from "@mui/material"

export const Consultas = ()=>{
    return(
        <>
        <div style={{width:'700px',marginTop:"10px",height:"80%",marginBottom:"50px"}}>
            <h3>Consultas</h3>
            <hr></hr>
            <div style={{display:"flex",gap:"10px",marginTop:"10px"}}>
                <div style={{display:"flex",flexDirection:"column",height:"260px",justifyContent:"space-evenly"}}>
                    <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                    <TextField id="outlined-basic" label="Apellido" variant="outlined" />
                    <TextField id="outlined-basic" label="Telefono" variant="outlined" />
                </div>
                <textarea style={{width:"60%"}} placeholder="Comentario" ></textarea>
            </div>
        
        </div>
        </>
    )
}