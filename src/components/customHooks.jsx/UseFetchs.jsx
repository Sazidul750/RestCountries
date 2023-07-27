import React, { useState,useEffect } from 'react'

export default function UseFetchs(url) {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(url).then((res)=>{
                if(!res.ok){
                    throw Error("fetch error")
                }else{
                    return res.json()
                }
                
            }).then((data)=>{
                setData(data)
                setError(null)
                setLoading(false)
            }).catch((error)=>{
                setError(error.message)
                setLoading(false)
            })
        }, 3000);
    }, [url])

    return{data,loading,error}
 
}
