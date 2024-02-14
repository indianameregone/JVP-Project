'use client'
import Link from 'next/link';
import './page.module.css'
//import Logo from "./img/logo.png"
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#0E3354',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        }
    }
});
export const Nav = ()=>{
    return(
        <ThemeProvider theme={theme}>
        <nav>
            <ul style={{display:"flex", height:"50px",width: "100%", backgroundColor: "#417586", alignItems:"center",justifyContent:"center",gap:"10px"}}>
                <li style={{listStyle:"none"}}>
                <Button variant="contained"><Link href={'/'} style={{color:"#ffffff",textDecoration:"none"}}>Inicio</Link></Button>               
                </li>
                <li style={{listStyle:"none"}}>
                <Button variant="contained"><Link href={'/empresa'} style={{color:"#ffffff",textDecoration:"none"}}>Empresa</Link></Button>                 
                </li>
                <li style={{listStyle:"none"}}>
                <Button variant="contained"><Link href={'/servicios'} style={{color:"#ffffff",textDecoration:"none"}}>Servicios</Link></Button>                 
                </li>
                <li style={{listStyle:"none"}}>
                <Button variant="contained"><Link href={'/proyectos'} style={{color:"#ffffff",textDecoration:"none"}}>Proyecto</Link></Button>
                </li>
                <li style={{listStyle:"none"}}>
                <Button variant="contained"><Link href={'/contacto'} style={{color:"#ffffff",textDecoration:"none"}}>Contacto</Link></Button>
                
                </li>
            </ul>
        </nav>
        </ThemeProvider>
    )
}