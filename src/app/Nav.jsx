import Link from 'next/link';
import './page.module.css'
import { Button } from '@mui/material';
export const Nav = ()=>{
    return(
        <nav>
            <ul style={{display:"flex", height:"50px",width: "100%", backgroundColor: "blue", alignItems:"center",justifyContent:"center",gap:"10px"}}>
                <li style={{listStyle:"none"}}>
                <Button variant="contained"><Link href={'/home'} style={{color:"#ffffff",textDecoration:"none"}}>Inicio</Link></Button>               
                </li>
                <li style={{listStyle:"none"}}>
                <Button variant="contained"><Link href={'/empresa'} style={{color:"#ffffff",textDecoration:"none"}}>Empresa</Link></Button>                 
                </li>
                <li style={{listStyle:"none"}}>
                <Button variant="contained"><Link href={'/proyecto'} style={{color:"#ffffff",textDecoration:"none"}}>Proyecto</Link></Button>
                </li>
                <li style={{listStyle:"none"}}>
                <Button variant="contained"><Link href={'/contacto'} style={{color:"#ffffff",textDecoration:"none"}}>Contacto</Link></Button>
                
                </li>
            </ul>
        </nav>
    )
}