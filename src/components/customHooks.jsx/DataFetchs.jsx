import React from 'react'
import UseFetchs from './UseFetchs'

const loadingMessage=<p>Fetching Api Data...</p>
const errorMessage=<p>Error youur Fetch Api Data</p>

export default function DataFetchs() {
    const {data,loading,error}=UseFetchs('https://jsonplaceholder.typicode.com/posts')
    
    const elements=data&&data.map((todo)=>{
        return <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
        </div>
    })
  return (
    <div>
        {elements}
        {loading&&loadingMessage}
        {error&&errorMessage}
    </div>
  )
}
