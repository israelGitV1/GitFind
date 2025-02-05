import React from 'react'
import './styles.css'

export default function ItemList({title, desciption, url}) {
  return (
    <div className='item-list'>
      <a href={url} target= "_blank">{title}</a>
      <p>{desciption}</p>
      <hr />
    </div>
  )
}
