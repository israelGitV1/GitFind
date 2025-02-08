import React from 'react'
import { ContentItemList } from './styles'

export default function ItemList({title, desciption, url, click}) {
  return (
    <ContentItemList>
      <a href={url} target= "_blank">{title}</a>
      <p>{desciption}</p>
      <a href="#" className="remove" onClick={click}>remove</a>
      <hr />
    </ContentItemList>
  )
}
