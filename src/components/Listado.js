import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);


    useEffect(() =>{
        conseguirPeliculas();
    }, []);

    
    const conseguirPeliculas = () =>{
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        setListadoState(peliculas);

        return peliculas;
       
    }

    const borrarPeli = (id) =>{
        //conseguir peliculas almacenados 

        let pelis_almacenadas = conseguirPeliculas();

        //filtrar esas peliculas para eliminar el items 
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        //actualizar el listado 

        setListadoState(nuevo_array_peliculas);
        
        //actualizar los datos en el localStorage 
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));
    }


  return (
    <>
        { listadoState != null?
          listadoState.map(peli =>{
            return(
                <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo} </h3>
                <p className="descripcion">{peli.descripcion}</p>
                <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                {/* aparece el formulario para editar*/}
                {editar === peli.id && (
                    <Editar peli={peli}
                    conseguirPeliculas={conseguirPeliculas}
                    setEditar ={setEditar} 
                    setListadoState={setListadoState}/>
                )}

            </article>


            );


        })
        : <h2>No hay Peliculas para mostrar :)</h2>
    
    }
       
    
    
    </>
  )
}
