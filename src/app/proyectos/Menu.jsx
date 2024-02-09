import BasicList from "./BasicList";
import Grid from '@mui/material/Grid';

function Menu() {
    
    const lista1 = [
        { text : 'Agua y Saneamiento' },
        { text : 'Hidraulicas' },
        { text : 'Viales' },
        { text : 'Civiles' }
      ];

      const lista2 = [
        { text : 'Tarifas' },
        { text : 'Gestion' },
        { text : 'Regulacion' },
        { text : 'Economica' },
        { text : 'Otros' }
      ];

      const lista3 = [
        { text : 'Asesoramiento' }
      ];

      const lista4 = [
        { text : 'Estudios Basicos' },
        { text : 'Proyectos Ejecutivos' },
        { text : 'Evaluacion Socio Ambiental' },
        { text : 'Planes Maestros' },
        { text : 'Ingenieria de Detalle' },
        { text : 'Estudios de Factibilidad' }
    ];

      const lista5 = [
        { text : 'Agua y Saneamiento' },
        { text : 'Especiales' },
        { text : 'Tarifas' },
        { text : 'Gas' },
        { text : 'Viales' },
        { text : 'Ambientales' },
        { text : 'Contrato de Prestamos' }
      ];

      const lista6 = [
        { text : 'Quality Assurance' }
      ];

    return (
    <>


        <Grid container spacing={2} rowSpacing={1}>
            <Grid container item spacing={2} xs={4}>
                <BasicList listItems={lista1}/>
                <BasicList listItems={lista4}/>
            </Grid>
            <Grid container item spacing={2} xs={4}>
                <BasicList listItems={lista2}/>
                <BasicList listItems={lista5}/>
            </Grid>
            <Grid container item spacing={2} xs={4}>
                <BasicList listItems={lista3}/>
                <BasicList listItems={lista6}/>
            </Grid>
        </Grid>



    </>
  );
}
export default Menu;