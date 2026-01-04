import { useState, useEffect } from 'react'

export const useFetch = (url) => {

    console.log('Leyendo desde Fetch...')
    
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

        fetch(url) // <= devuelve una promesa
            .then(respuesta => {
                if(!respuesta.ok || respuesta.status !== 200) {
                    throw new Error('Se ha producido un error');
                }
                console.log(respuesta)
                return respuesta.json()
            }) 
            .then(data => setData(data))
            .catch(error => setError(error.message)) // <= capturamos y "seteamos" el error.
            .finally(() => setLoading(false)) // <= este método se ejecuta cuando ya han terminado todas las promesas por resolverse
        }, []) // <= [] vacio hace que el hook se ejecute una sola vez

    return { data, loading, error }

  }