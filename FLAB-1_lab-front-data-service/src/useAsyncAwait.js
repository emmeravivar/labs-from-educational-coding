import { useState, useEffect } from 'react'
import axios from 'axios';

export const useAsyncAwait= (url) => {

    console.log('Leyendo desde Async Await...')
    
    //Creamos el state
    const [data, setData ] = useState(null)

    //Controlando la carga de los datos
    const [loading, setLoading] = useState(null)

    //Controlando los errores
    const [error, setError] = useState(null)


    //Llamamos al Hook useEffect
    useEffect(() => {

        //1. Llamaos a loading
        setLoading(true) // <= para asegurarnos que entra siempre en true

        //Crear un función que nos permita declararla como asíncrona 
        const dataAsync = async() => { 

            //Declaramos el bloque de pruebas con try catch y finally
            try {
                const respuesta = await axios.get(url);

                if(respuesta.status !== 200) {
                    throw new Error('Se ha producido un error');
                }
                const data = await respuesta.data;
                setData(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }

        dataAsync()

        }, [])

    return { data, loading, error }

  }