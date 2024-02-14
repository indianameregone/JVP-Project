'use client'
import { Jvp } from "./JVP";
import { Mensaje } from "./MsjDCEO";
import { ValCom } from "./ValCom";
import { Org } from "./Org";
import { Polcal } from "./PolCal";
import { Rse } from "./RSE";
import { Transfdig } from "./TransDig"
import { Nav } from "../Nav"
import { Button } from '@mui/material';
import { useState } from "react"
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

const Empresa = () => {
    let [jvp, setJvp] = useState(<Jvp />)
    let [mensaje, setmensaje] = useState('')
    let [valores, setvalores] = useState('')
    let [orga, setorga] = useState ('')
    let [politica, setpolitica] = useState('')
    let [rse, setrse] = useState('')
    let [trans, settrans] = useState('')

    return (
        <>
            <Nav />
            <div style={{ display: "flex", width: "100%" }} className="Empresa">
            
                <ThemeProvider theme={theme}>
                    <section style={{ display: "flex", flexDirection: "column", width: "200px", padding: "0 20px 0 20px", gap: "5px", marginTop: "10px" }}>
                    <img style={{height: "100px"}}
      src="https://static.wixstatic.com/media/8e00bb_89c81504de6a4b7495adb97d57c0d84e~mv2.png/v1/crop/x_24,y_0,w_785,h_432/fill/w_200,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20GOTA%20.png"
      alt="Logo"></img>
                        <Button variant="contained" onClick={() => {
                            setJvp(<Jvp />)
                            setmensaje('')
                            setvalores('')
                            setorga('')
                            setpolitica('')
                            setrse('')
                            settrans('')
                        }}>Empresa</Button>
                        <Button variant="contained" onClick={() => {
                            setmensaje(<Mensaje />)
                            setJvp('')
                            setvalores('')
                            setorga('')
                            setpolitica('')
                            setrse('')
                            settrans('')
                        }}>Mensaje del CEO</Button>
                        <Button variant="contained" onClick={() => {
                            setmensaje('')
                            setJvp('')
                            setvalores(<ValCom />)
                            setorga('')
                            setpolitica('')
                            setrse('')
                            settrans('')
                        }}>Valores Compartidos</Button>
                        <Button variant="contained" onClick={() => {
                            setmensaje('')
                            setJvp('')
                            setvalores('')
                            setorga(<Org />)
                            setpolitica('')
                            settrans('')
                        }}>Organización</Button>
                        <Button variant="contained" onClick={() => {
                            setmensaje('')
                            setJvp('')
                            setvalores('')
                            setorga('')
                            setpolitica(<Polcal />)
                            setrse('')
                            settrans('')
                        }}>Política de cálidad</Button>
                        <Button variant="contained" onClick={() => {
                            setmensaje('')
                            setJvp('')
                            setvalores('')
                            setorga('')
                            setpolitica('')
                            setrse(<Rse />)
                            settrans('')
                        }}>RSE</Button>
                        <Button variant="contained" onClick={() => {
                            setmensaje('')
                            setJvp('')
                            setvalores('')
                            setorga('')
                            setpolitica('')
                            setrse('')
                            settrans(<Transfdig />)
                        }}>Transformación Digital</Button>
                    </section>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {jvp}
                        {mensaje}
                        {valores}
                        {orga}
                        {politica}
                        {rse}
                        {trans}
                    </div>
                </ThemeProvider>
            </div>
        </>
    )
}
export default Empresa