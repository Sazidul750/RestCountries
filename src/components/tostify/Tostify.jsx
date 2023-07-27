import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Tostify() {
    const handleButton=(()=>{
        toast("new todo added")
    })
  return (
    <div>
        <h2>Todos</h2>
        <button onClick={handleButton} >todo Add</button>
        <ToastContainer />
    </div>
  )
}
