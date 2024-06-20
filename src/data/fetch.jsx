import { useEffect, useState } from "react";

export default function (url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            if(!response.ok){
                throw new Error("Error en la petición")
            }
            return response.json()
        })
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [])
    return { data, loading, error }
}