'use client'
import { Jvp } from "./JVP";
import { Mensaje } from "./MsjDCEO";
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

    return (
        <>
            <Nav />
            <div style={{ display: "flex", width: "100%" }} className="Empresa">
                <ThemeProvider theme={theme}>
                    <section style={{ display: "flex", flexDirection: "column", width: "200px", padding: "0 20px 0 20px", gap: "5px", marginTop: "10px" }}>
                        <Button variant="contained" onClick={() => {
                            setJvp(<Jvp />)
                            setmensaje('')

                        }}>Empresa</Button>
                        <Button variant="contained" onClick={() => {
                            setmensaje(<Mensaje />)
                            setJvp('')

                        }}>Mensaje del CEO</Button>
                    </section>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {jvp}
                        {mensaje}
                    </div>
                </ThemeProvider>
            </div>
        </>
    )
}
export default Empresa