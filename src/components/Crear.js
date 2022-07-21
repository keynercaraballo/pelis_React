import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponent = "Añadir Peliculas";
    const [peliState, setPeliState] = useState({
        titulo : '',
        descripcion : ''
    })

    //destructuramos el array peliState 

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        //conseguir Datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        

        //Crear objeto de la pelicula a guardar 

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
    }
    //Guarda estado 
    setPeliState(peli);

    //Actualizar el estado dek listado principal 
    setListadoState(elementos =>{
       return [...elementos, peli ];
    }) //agregamos el nuevo items al estado que existe 



    //Guardar en el almacenamiento 
    GuardarEnStorage("pelis", peli);
  

}



    
  return (
    <div className="add">
                <h3 className="title">{ tituloComponent}</h3>
                 {(titulo && descripcion) && "Has creado la pelicula: " +   titulo}
                <form onSubmit={conseguirDatosForm}>
                   <input type="text" placeholder="Titulo" name='titulo' /> 
                   <textarea id="descripcion" name="descripcion" cols="30" rows="10" placeholder="Descripcion" ></textarea>
                   <input type="submit" value="Guardar" />
                </form>

    </div>

  )
}
