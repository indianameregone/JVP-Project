import Link from 'next/link';
import './page.module.css'
export const Nav = ()=>{
    return(
        <nav>
            <ul style={{display:"flex", height:"50px",width: "100%", backgroundColor: "blue", alignItems:"center",justifyContent:"center",gap:"10px"}}>
                <li style={{listStyle:"none"}}>
                <Link href={'/'} style={{color:"#ffffff"}}>Inicio</Link>
                </li>
                <li style={{listStyle:"none"}}>
                <Link href={'/empresa'} style={{color:"#ffffff"}}>Empresa</Link>
                </li>
                <li style={{listStyle:"none"}}>
                <Link href={'/proyecto'} style={{color:"#ffffff"}}>Proyecto</Link>
                </li>
                <li style={{listStyle:"none"}}>
                <Link href={'/contacto'} style={{color:"#ffffff"}}>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}