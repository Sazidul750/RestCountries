import React, { useEffect, useState } from 'react'

export default function Search(props) {
    const [searchText,setSearchText]=useState('')
    const hangleChange=(e)=>{
        setSearchText(e.target.value)
    }

    useEffect(()=>{
        props.onSearch(searchText)
    },[searchText])
  return (
    <div style={{textAlign:'center'}}>
        <input  type="text" placeholder='Search Contry' onChange={hangleChange} value={searchText}  name="" id="" />
    </div>
  )
}
