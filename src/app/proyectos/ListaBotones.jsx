/* import './style.css'
import ListItemText from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';



export function ListaBotones({name, size}){
    const titulo = name;
    const largo = size;
    const botones = Array.from({ length: largo }, (_, index) => (
        <>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemText primary={name} />
        </ListItemButton>
        </ListItem>
        </>
      ));

    return(
    <>

            {botones}

    </>

       
    )

} */