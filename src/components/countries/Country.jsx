import React from 'react'

import style from './country.module.css'

export default function Country(props) {
    const {name,common,capital,area,population,flags}=props.country
    const handleClick=(name)=>{
        props.onRemove(name)
    }
  return (
    <article className={style.country} >
        <div className={style.card}>
            <img src={flags.png}  className={style.flag} alt={name.common}/>
            <h3>Name: {name.common}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <h3>Population: {population}</h3>
            <div>
                <button onClick={()=>handleClick(name.common)} className={style.btn}>Remove Country</button>
            </div>
        </div>
    </article>
  )
}
