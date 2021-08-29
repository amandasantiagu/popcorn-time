import React from 'react'
import {AiOutlineCloseSquare} from 'react-icons/ai'

export default function index() {
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{fontSize: "5em", color: 'red'}}>ERROR 404</h1>
      <h2>Page Not Found!</h2>
      <AiOutlineCloseSquare size={50} style={{fontSize: "5em", color: 'gray'}} />
    </div>
  )
}
