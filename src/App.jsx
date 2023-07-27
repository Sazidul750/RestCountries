import React, { useEffect, useState, useTransition } from 'react'
import Users from './components/user/Users'
import Search from './components/user/Search'
const url='https://jsonplaceholder.typicode.com/users'
import './App.css'


export default function App() {
  const [data,setData]=useState([])
  const [filterData,setFilterData]=useState(data)
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(true)

const useFetch=async(url)=>{
  setLoading(true)
  try {
    const response=await fetch(url)
    const data= await response.json()
    setData(data)
    setFilterData(data)
    setLoading(false)
    setError(null)
  } catch (error) {
    setError(error)
    setLoading(false)
    
  }
}
  
  useEffect(()=>{
    useFetch(url)
  },[])

  const handleDelate=(name)=>{
   const filter=filterData.filter((country)=>country.name!==name)
   setFilterData(filter)
  }



const handleSearch=((searchValue)=>{
  const value=searchValue.toLowerCase()
  const newUser=data.filter((name)=>{
    const userName=name.name.toLowerCase()
    return userName.startsWith(value)
  })
  setFilterData(newUser)
})



  return (


    <div>
      <h1 style={{textAlign:'center'}}>10 User Information</h1>
      <Search onSearch={handleSearch} />
      {loading&&<h3>Data Loading</h3>}
      {error&&<h3>{error.message}</h3>}
      <Users users={filterData} onDelate={handleDelate} />
    </div>
  )
}
