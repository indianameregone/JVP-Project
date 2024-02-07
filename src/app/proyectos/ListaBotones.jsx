import './style.css'


export function ListaBotones({name, size}){
    const titulo = name;
    const largo = size;
    const botones = Array.from({ length: largo }, (_, index) => (
        <div key={index}>
             <button>Boton {index + 1}</button>
             </div>
      ));

    return(
    <>
        <div>
            <h2>{titulo}</h2>
        </div>
        <div>
            {botones}
        </div>
    </>

       
    )

}