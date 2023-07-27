import React, { useEffect, useState } from 'react'

export default function Search(props) {
  const [searchText,setSearchText]=useState('')
  const handleChange=(e)=>{
    setSearchText(e.target.value)
    
  }
  useEffect(()=>{
    props.onSearch(searchText)
  },[searchText])
  return (
    <article>
        <div style={{textAlign:'center'}}>
            <input type="text" value={searchText} placeholder='User Search' onChange={handleChange} />
        </div>
    </article>
  )
}
