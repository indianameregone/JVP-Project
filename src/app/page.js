import './page.module.css'
import { Nav } from "./Nav";

import Image from 'next/image';
//import {logo} from "./img/Logo.png"
import {iram} from "./img/iram.jpg"
import { Avatar } from '@mui/material';

import {Footer} from './footer'


export default function Home() {
  return(
    <>
    <Nav/>
    <div style={{display:"flex",width:"100%", gap:"30px"}}>
      <div style={{display:"flex",gap:"40px"}}>
       <img style={{height: "100px"}}
      src="https://static.wixstatic.com/media/8e00bb_89c81504de6a4b7495adb97d57c0d84e~mv2.png/v1/crop/x_24,y_0,w_785,h_432/fill/w_200,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20GOTA%20.png"
      alt="Logo"
    />
    <img style={{marginTop:"30px"}}
      src="https://static.wixstatic.com/media/8e00bb_809c3eff4e0d40af878809d98a494e35~mv2.jpg/v1/fill/w_549,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e00bb_809c3eff4e0d40af878809d98a494e35~mv2.jpg"
      alt="Empresa"
    />
    </div>
   
    <div style={{display:"flex", flexDirection:"column",width:"300px",paddingTop:"30px"}}>
      <h3>Soluciones Profesionales de Alta Calificación en Ingeniería, Economía, y Administración de Empresas</h3>
      
      <img style={{marginLeft:"30px",marginTop:"20px"}}
      src="https://static.wixstatic.com/media/8e00bb_faf7483f64e44c819f75d2dbe8e70586~mv2.jpg/v1/fill/w_279,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Imagen%20ISO%20JVP.jpg"
      alt="Iram"/>
    
    
    </div>
    </div>
    <Footer/>
    </>
)
}

