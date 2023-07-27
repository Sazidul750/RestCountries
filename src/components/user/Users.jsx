import React from 'react'
import {v4 as uuidv4} from 'uuid'
import User from './User'
import style from './users.module.css'

export default function Users(props) {
    const {users}=props
  return (
    <div className={style.users}>
        {
            users.map((user)=>{
              const userNew={user,id:uuidv4()}
                return <User {...user} key={userNew.id} onDelate={props.onDelate} />
            })
        }
    </div>
  )
}
