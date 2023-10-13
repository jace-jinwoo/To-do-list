import axios from "axios"
import React, { useEffect } from 'react'

const axiosInstance = axios.create({baseURL: 'http://localhost:5000'})

function Home () {
    
    const callApi = React.useCallback(async () => {
        const result = await axiosInstance.get('api/hello')
        console.log("Result :: ", result)
    }, [])
    
    useEffect(() => {
        callApi()
    }, [])

    return (
        <div>
            Home
        </div>        
    )
}

export default Home
