import React from 'react'
import style from './user.module.css'

export default function User(props) {
    const {id,name,username,email,phone,website,address,street,company}=props
    const handleClik=(name)=>{
        props.onDelate(name)
    }
  return (
    <article className={style.user} >
        <div>
            <p>{id}</p>
            <h3>Name: {name}  {username}</h3>
            <h3>Email: {email}</h3>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
            <p>Address: {address.street}</p>
            <div>
                <button className={style.btn} onClick={()=>handleClik(name)} >Remove user</button>
            </div>
        </div>
    </article>
  )
}
