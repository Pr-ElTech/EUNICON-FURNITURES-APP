import React from 'react'
import "../css/Portrait.css"
import { directors } from '../data/directors'

const Portrait = ({image,name,role}) => {
  return (
    <div className='card'>
      <img src={image} alt={name} />

      <h3>{name}</h3>
      
      <p>{role}</p>
    </div>
  )
}

export default Portrait
