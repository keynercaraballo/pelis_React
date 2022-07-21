export const GuardarEnStorage = (clave, elemento) =>{
    //conseguir los elemnetos que ya tenemos en el localstorage 
    let elementos = JSON.parse(localStorage.getItem(clave));

    console.log(elementos);
    //comprobar si es un array
    if(Array.isArray(elementos)){
        elementos.push(elemento);
    }else{
        //creamos el array con el valor nuevo 
        elementos = [elemento];
    }

    //guardar en el localStorage 
    localStorage.setItem(clave, JSON.stringify(elementos));

    //devolver objeto guardado 
    return elemento;
}